import {observable, action} from 'mobx'
import * as R from 'ramda'
import {random} from 'rambdax/src/random'

import {ItemId, Item} from './itemsStore'

type Width = number
interface Widths {
  [index: string]: Width
}

export class WidthsStore {
  @observable widths: Widths = {}

  @action
  randomize(list: Item[]): void {
    this.widths = R.pipe(
      R.indexBy(R.prop('id')),
      R.mapObjIndexed(() => random(5, 30)),
    )(list)
  }

  getWidth(id: ItemId): Width {
    return this.widths[id]
  }
}

export default new WidthsStore()
