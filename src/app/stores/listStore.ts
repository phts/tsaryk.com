import {observable, action, autorun} from 'mobx'
import * as R from 'ramda'
import shuffle from 'rambdax/modules/shuffle'

import {
  ItemPosition,
  ItemSize,
  ItemType,
} from 'app/data/metaProps'
import itemsStore, {Item, ItemId, ItemsStore} from './itemsStore'

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

type PipeFn = (x: List) => List

const sortFunc: {[index in Mode]: PipeFn} = {
  Asc: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  Categories: R.sortBy(R.prop('id')),
  Random: shuffle,
}

const itemsBlock: (mode: Mode) => PipeFn = mode => R.pipe(
  x => [ItemPosition.Head, ItemPosition.Middle, ItemPosition.Tail].map(p => {
    return R.filter(R.propEq('position', p), x) as ListItem[]
  }),
  x => [
    ...x[0],
    ...sortFunc[mode](x[1]),
    ...x[2],
  ],
)

const withoutCategoryItems: PipeFn = R.reject(R.propEq('type', ItemType.Category))

const CATEGORIES: ItemId[] = [
  'Contacts',
  'Work',
  'Hobby',
  'Meta',
]

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
    this.list = R.pipe(
      R.values,
      withoutCategoryItems,
      itemsBlock(this.mode),
    )(this.items.items)
  }

  private refreshCategorizedList() {
    this.list = R.pipe(
      R.values,
      withoutCategoryItems,
      x => CATEGORIES.map(cat => {
        return R.concat(
          [this.items.items[cat]],
          R.pipe(
            R.filter(R.propEq('category', cat)),
            itemsBlock(Mode.Asc),
          )(x),
        )
      }),
      R.flatten,
    )(this.items.items) as List
  }
}

export default new ListStore(itemsStore)
