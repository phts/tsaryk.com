import {computed} from 'mobx'
import * as R from 'ramda'

import {enumToArray} from 'app/utils/core'
import {
  DEFAULT_META_PROPS,
  ItemPosition,
  ItemSize,
  ItemType,
  metaPropsMap,
} from 'app/data/metaProps'
import {
  DEFAULT_CATEGORY_PROPS,
  ItemCategory,
  categoryPropsMap,
} from 'app/data/categoryProps'
import {
  Lang,
  TranslatedStrings,
  translations,
} from 'app/data/translations'
import {Names, KnownName} from 'app/data/names'
import langStore, {LangStore} from './langStore'

export interface ItemData {
}
export type ItemId = KnownName

export interface Item {
  category: ItemCategory
  data?: ItemData
  description?: string
  id: ItemId
  name: string
  position: ItemPosition
  size: ItemSize
  title?: string
  tooltip?: string
  type: ItemType
}

export type Items = {[index in ItemId]: Item}

type ItemNamesMap = {[T in KnownName]: T}
const ITEM_NAMES: KnownName[] = enumToArray<typeof Names>(Names)
const ITEM_NAMES_MAP: ItemNamesMap = R.indexBy(x => x, ITEM_NAMES) as ItemNamesMap

const FALLBACK_LANG = Lang.RU
const FALLBACK = translations[FALLBACK_LANG]

function toDefaultItem(id: ItemId): Item {
  return Object.assign({},
    DEFAULT_META_PROPS,
    DEFAULT_CATEGORY_PROPS,
    {id, name: id},
  )
}

function toItem(strings: TranslatedStrings, fallback: TranslatedStrings):
(defaultItem: Item, id: ItemId) => Item {
  return (defaultItem: Item, id: ItemId) => Object.assign({},
    defaultItem,
    metaPropsMap[id] || {},
    categoryPropsMap[id] || {},
    R.pick(['description', 'title'], fallback[id]),
    R.pick(['name', 'description', 'data', 'title', 'tooltip'], strings[id]),
  )
}

function toItems(itemNamesMap: ItemNamesMap, strings: TranslatedStrings): Items {
  return R.pipe(
    R.mapObjIndexed(toDefaultItem),
    R.mapObjIndexed(toItem(strings, FALLBACK)),
  )(itemNamesMap) as Items
}

export class ItemsStore {
  /* eslint-disable no-useless-constructor */
  private cache: {[index in Lang]?: Items} = {}

  constructor(private languageStore: LangStore) {
  }

  @computed
  get items(): Items {
    const cached = this.cache[this.lang]
    if (cached) {
      return cached
    }

    const items = toItems(ITEM_NAMES_MAP, this.currentTranslatedStrings)
    this.cache[this.lang] = items
    return items
  }

  @computed
  private get lang(): Lang {
    return this.languageStore.lang
  }

  @computed
  private get currentTranslatedStrings() {
    return translations[this.lang]
  }
}

export default new ItemsStore(langStore)
