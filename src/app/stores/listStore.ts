import {observable, action, autorun} from 'mobx'
import * as R from 'ramda'
import shuffle from 'rambdax/modules/shuffle'

import {
  ItemPosition,
  ItemSize,
  ItemType,
} from 'app/data/metaProps'
import itemsStore, {Item, Items, ItemId, ItemsStore} from './itemsStore'

export {
  ItemId,
  ItemPosition,
  ItemSize,
  ItemType,
}
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

const CATEGORIES: ItemId[] = [
  'Contacts',
  'Work',
  'Hobby',
  'Meta',
]

export class ListStore {
  @observable mode: Mode = Mode.Asc
  @observable list: List = []

  private getListMemoized: (items: Items, mode: Mode) => List
  private getCategorizedListMemoized: (items: Items) => List

  constructor(private items: ItemsStore) {
    this.getListMemoized = R.memoize(this.getList)
    this.getCategorizedListMemoized = R.memoize(this.getCategorizedList)
    autorun(() => {
      this.refresh()
    })
  }

  @action
  setMode(mode: Mode): void {
    const forceRefresh = mode === Mode.Random && this.mode === mode
    if (forceRefresh) {
      this.mode = null
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
    this.list = this.getListMemoized(this.items.items, this.mode)
  }

  private getList(items: Items, mode: Mode): List {
    return R.pipe(
      R.values,
      R.reject(R.propEq('type', ItemType.Category)),
      x => [ItemPosition.Head, ItemPosition.Middle, ItemPosition.Tail].map(p => {
        return R.filter(R.propEq('position', p), x) as ListItem[]
      }),
      x => [
        ...x[0],
        ...sortFunc[mode](x[1]),
        ...x[2],
      ],
    )(items)
  }

  private refreshCategorizedList() {
    this.list = this.getCategorizedListMemoized(this.items.items)
  }

  private getCategorizedList(items: Items): List {
    return R.pipe(
      R.values,
      R.reject(R.propEq('type', ItemType.Category)),
      sortFunc[Mode.Asc],
      x => CATEGORIES.map(cat => {
        return R.concat(
          [items[cat]],
          R.filter(R.propEq('category', cat), x),
        )
      }),
      R.flatten,
    )(items) as List
  }
}

export default new ListStore(itemsStore)
