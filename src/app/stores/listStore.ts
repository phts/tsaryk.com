import {observable, action, autorun} from 'mobx'
import * as R from 'ramda'
import {shuffle} from 'rambdax'

import {ItemPosition, ItemSize, ItemType} from 'data/metaProps'
import itemsStore, {Item, ItemData, ItemId, ItemsStore, Items} from './itemsStore'

export {ItemData, ItemId, ItemPosition, ItemSize, ItemType}
export enum Mode {
  Asc = 'Asc',
  Categories = 'Categories',
  Random = 'Random',
}

export type ListItem = Item
export type List = ListItem[]

const sortFunc: {[index in Mode]: (x: List) => List} = {
  Asc: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  Categories: R.sortBy(R.prop('id')),
  Random: shuffle,
}

const CATEGORIES: ItemId[] = ['About', 'Contacts', 'Work', 'Hobby', 'Meta']

export class ListStore {
  @observable mode: Mode = Mode.Asc
  @observable list: List = []

  constructor(private items: ItemsStore) {
    autorun(() => {
      this.refresh()
    })
  }

  @action
  setMode(mode: Mode): void {
    const forceRefresh = mode === Mode.Random && this.mode === mode
    if (forceRefresh) {
      this.mode = null as unknown as Mode
    }

    this.mode = mode
  }

  private refresh() {
    if (this.mode === Mode.Categories) {
      this.refreshCategorizedList()
    } else {
      this.refreshList()
    }
  }

  private refreshList() {
    this.list = R.pipe<Items, List, List, List[], List>(
      R.values,
      R.reject(R.propEq('type', ItemType.Category)),
      (x) =>
        [ItemPosition.Head, ItemPosition.Middle, ItemPosition.Tail].map((p) => {
          return R.filter(R.propEq('position', p), x)
        }),
      (x) => [...x[0], ...sortFunc[this.mode](x[1]), ...x[2]]
    )(this.items.items)
  }

  private refreshCategorizedList() {
    this.list = R.pipe<Items, List, List, List, List[], List>(
      R.values,
      R.reject(R.propEq('type', ItemType.Category)),
      sortFunc[Mode.Asc],
      (x) =>
        CATEGORIES.map((cat) => {
          return R.concat([this.items.items[cat]], R.filter(R.propEq('category', cat), x))
        }),
      R.flatten
    )(this.items.items)
  }
}

export default new ListStore(itemsStore)
