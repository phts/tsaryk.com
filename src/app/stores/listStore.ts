import {observable, action, autorun} from 'mobx'
import * as R from 'ramda'
import {shuffle} from 'rambdax'

import {
  ItemPosition,
  ItemCategory,
  ItemSize,
} from 'app/data/meta'
import {
  Item,
  ItemId,
  itemsStore,
  ItemsStore,
} from './itemsStore'

export {
  ItemCategory,
  ItemId,
  ItemPosition,
  ItemSize,
}
export enum Mode {
  Asc = 'Asc',
  Random = 'Random',
}

export type ListItem = Item
export type List = ListItem[]

const sortFunc: {[index in Mode]: (x: Item[]) => Item[]} = {
  Asc: R.sortBy(R.compose(R.toLower, R.prop('name'))),
  Random: shuffle,
}

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
    this.list = R.pipe(
      R.values,
      x => [ItemPosition.Head, ItemPosition.Middle, ItemPosition.Tail].map(p => {
        return R.filter(R.propEq('position', p), x) as ListItem[]
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
