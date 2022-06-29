import {observable, action} from 'mobx'
import * as R from 'ramda'
import {random} from 'rambdax/src/random'

import {ItemId, Item} from './itemsStore'

type Width = number
type Widths = Record<ItemId, number>

export class WidthsStore {
  @observable widths: Widths = {} as unknown as Widths

  @action
  randomize(list: Item[]): void {
    this.widths = R.pipe<Item[], {[key: string]: Item}, {[key: string]: number}>(
      R.indexBy(R.prop('id')),
      R.mapObjIndexed(() => random(5, 30))
    )(list) as Widths
  }

  getWidth(id: ItemId): Width {
    return this.widths[id]
  }
}

export default new WidthsStore()
