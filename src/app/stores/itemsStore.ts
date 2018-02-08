import {computed} from 'mobx'
import * as R from 'ramda'

import {enumToArray} from 'app/utils'
import {
  DEFAULT_META_PROPS_SET,
  ItemCategory,
  ItemPosition,
  ItemSize,
  metaProps,
} from 'app/data/meta'
import {
  Lang,
  TranslatedStrings,
  translations,
} from 'app/data/translations'
import {Names, KnownName} from 'app/data/names'
import {LangStore, langStore} from './langStore'


export type ItemId = KnownName

export interface Item {
  category: ItemCategory
  description?: string
  id: ItemId
  name: string
  position: ItemPosition
  size: ItemSize
}

export type Items = Item[]

type ItemNamesMap = {[T in KnownName]: T}
const ITEM_NAMES: KnownName[] = enumToArray<typeof Names>(Names)
const ITEM_NAMES_MAP: ItemNamesMap = R.indexBy(x => x, ITEM_NAMES)

const FALLBACK_LANG = Lang.RU
const FALLBACK = translations[FALLBACK_LANG]

function toDefaultItem(id: ItemId): Item {
  return Object.assign({},
    DEFAULT_META_PROPS_SET,
    {id, name: id},
  )
}

function toItem(strings: TranslatedStrings, fallback: TranslatedStrings): (defaultItem: Item, id: ItemId) => Item {
  return (defaultItem: Item, id: ItemId) => Object.assign({},
    defaultItem,
    metaProps[id] || {},
    R.pick(['description'], fallback[id]),
    R.pick(['name', 'description'], strings[id]),
  )
}

function toItems(itemNamesMap: ItemNamesMap, strings: TranslatedStrings): Items {
  return R.pipe(
    R.mapObjIndexed(toDefaultItem),
    R.mapObjIndexed(toItem(strings, FALLBACK)),
    R.values,
  )(itemNamesMap)
}

export class ItemsStore {
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

  findById(id: ItemId): Item {
    return R.find(x => x.id === id, this.items)
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

export const itemsStore = new ItemsStore(langStore)
