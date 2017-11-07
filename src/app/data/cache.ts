import {Items, Lang} from './items'

const cache: {[index: number]: Items} = {}

export function get(lang: Lang): Items | undefined {
  return cache[lang]
}

export function add(lang: Lang, items: Items): void {
  cache[lang] = items
}
