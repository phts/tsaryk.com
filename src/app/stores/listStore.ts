import {observable, action} from 'mobx'
import * as R from 'ramda'
import {shuffle} from 'rambdax'

import {
  ItemPosition,
  ItemCategory,
  ItemSize,
} from 'app/data/meta'
import {Lang} from 'app/data/translations'
import {
  Item,
  ItemId,
  Items,
  itemsStore,
  ItemsStore,
} from './itemsStore'

export {
  ItemCategory,
  ItemId,
  ItemPosition,
  ItemSize,
  Lang,
}
export enum Mode {
  Asc,
  Random,
}

export type ListItem = Item
export type List = Items

const sortFunc: {[index: number]: (x: Items) => Items} = {
  [Mode.Asc]: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  [Mode.Random]: shuffle,
}

export class ListStore {
  @observable mode: Mode = Mode.Asc
  @observable list: List = []

  constructor(private items: ItemsStore) {
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
    if (lang === this.items.lang) {
      return
    }

    this.items.setLang(lang)
    this.refresh()
  }

  private refresh() {
    this.list = R.pipe(
      x => [ItemPosition.Head, ItemPosition.Middle, ItemPosition.Tail].map(p => {
        return R.filter(R.propEq('position', p), x) as Items
      }),
      x => [
        ...x[0],
        ...sortFunc[this.mode](x[1]),
        ...x[2],
      ],
    )(this.items.items)
  }
}

export const listStore = new ListStore(itemsStore)
