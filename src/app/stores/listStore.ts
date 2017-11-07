import {observable, action} from 'mobx'
import * as R from 'ramda'
import {shuffle} from 'rambdax'

import {
  getTranslatedItems,
  ItemPosition,
  Items,
  Lang,
} from 'app/data/items'

export enum Mode {
  Asc,
  Random,
}

const sortFunc: {[index: number]: (x: Items) => Items} = {
  [Mode.Asc]: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  [Mode.Random]: shuffle,
}

export class ListStore {
  @observable mode: Mode = Mode.Asc
  @observable lang: Lang = Lang.EN
  @observable items: Items

  constructor() {
    this.refresh()
  }

  @action
  setMode(mode: Mode): void {
    const changed = this.mode !== mode
    const needRefresh = changed || mode === Mode.Random

    this.mode = mode
    if (needRefresh) {
      this.refresh()
    }
  }

  @action
  setLang(lang: Lang): void {
    if (this.lang === lang) {
      return
    }

    this.lang = lang
    this.refresh()
  }

  private refresh() {
    const translatedItems = getTranslatedItems(this.lang)
    const headItems = R.filter(R.propEq('position', ItemPosition.Head), translatedItems)
    const middleItems = R.filter(R.propEq('position', ItemPosition.Middle), translatedItems)
    const tailItems = R.filter(R.propEq('position', ItemPosition.Tail), translatedItems)

    this.items = [
      ...headItems,
      ...sortFunc[this.mode](middleItems),
      ...tailItems,
    ]
  }
}

export const listStore = new ListStore()
