import {observable, action} from 'mobx'
import * as R from 'rambdax'

import {
  Item,
  ItemCategory,
  ItemSize,
  Items,
  items,
} from '../data/items'

export {ItemCategory, ItemSize, Item}

export enum Mode {
  Asc,
  Random,
}

const sortFunc: {[index: number]: (x: Items) => Items} = {
  [Mode.Asc]: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  [Mode.Random]: R.shuffle,
}

const DEFAULT_ITEMS: Items = items

export class ListStore {
  @observable mode: Mode = Mode.Asc
  @observable items: Items = DEFAULT_ITEMS

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

  private refresh() {
    this.items = sortFunc[this.mode](this.items)
  }
}

export const listStore = new ListStore()
