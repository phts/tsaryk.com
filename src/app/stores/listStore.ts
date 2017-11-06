import {observable, action} from 'mobx'
import * as R from 'rambdax'

import {
  ItemPosition,
  Items,
  items,
} from '../data/items'

export enum Mode {
  Asc,
  Random,
}

const sortFunc: {[index: number]: (x: Items) => Items} = {
  [Mode.Asc]: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  [Mode.Random]: R.shuffle,
}

export class ListStore {
  @observable mode: Mode = Mode.Asc
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

  private refresh() {
    const headItems = R.filter(R.propEq('position', ItemPosition.Head), items)
    const middleItems = R.filter(R.propEq('position', ItemPosition.Middle), items)
    const tailItems = R.filter(R.propEq('position', ItemPosition.Tail), items)

    this.items = [
      ...headItems,
      ...sortFunc[this.mode](middleItems),
      ...tailItems,
    ]
  }
}

export const listStore = new ListStore()
