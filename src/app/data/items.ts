import * as R from 'ramda'

import * as cache from './cache'
import {
  DEFAULT_META_PROPS_SET,
  ItemCategory,
  ItemPosition,
  ItemSize,
  metaProps,
} from './meta'
import {
  Lang,
  Translatable,
  TranslatedStrings,
  translations,
} from './translations'

export {
  ItemCategory,
  ItemPosition,
  ItemSize,
  Lang,
}

export type ItemId = string

export interface Item {
  category: ItemCategory
  description?: string
  id: ItemId
  name: string
  position: ItemPosition
  size: ItemSize
}

export type Items = Item[]


const FALLBACK_LANG = Lang.EN

function toItem(raw: Translatable, id: ItemId): Item {
  return Object.assign({},
    DEFAULT_META_PROPS_SET,
    metaProps[id] || {},
    {id, name: id},
    raw)
}

function toItems(strings: TranslatedStrings, fallback: TranslatedStrings): Items {
  return R.pipe(
    R.ifElse(R.equals(fallback), R.identity, R.merge(fallback)),
    R.mapObjIndexed(toItem),
    R.values,
  )(strings)
}

export function getTranslatedItems(lang: Lang): Items {
  const cached = cache.get(lang)
  if (cached) {
    return cached
  }

  const fallback = translations[FALLBACK_LANG]
  const translated = toItems(translations[lang], fallback)
  cache.add(lang, translated)
  return translated
}
