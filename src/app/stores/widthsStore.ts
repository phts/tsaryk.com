import {observable, action} from 'mobx'
import * as R from 'ramda'
import {random} from 'rambdax'

import {ItemId, Items} from '../data/items'

type Width = number
type Widths = {[index: string]: Width}

export class WidthsStore {
  @observable widths: Widths = {}

  @action
  randomize(list: Items): void {
    this.widths = R.pipe(
      R.indexBy(R.prop('id')),
      R.mapObjIndexed(() => random(60, 500)),
    )(list)
  }

  getWidth(id: ItemId): Width {
    return this.widths[id]
  }
}

export const widthsStore = new WidthsStore()
