import * as R from 'ramda'
import {categoryPropsMap, CategoryPropsMap} from 'app/data/categoryProps'
import {KnownName, Names} from 'app/data/names'
import {enumToArray} from 'app/utils/core'

const includedItemNames: KnownName[] = R.compose(
  R.flatten,
  R.map((pair: [KnownName, {}]) => pair[0]),
  R.toPairs as (x: CategoryPropsMap) => Array<[KnownName, {}]>,
)(categoryPropsMap) as KnownName[]

const names: string[] = enumToArray(Names) as string[]

describe('categoryPropsMap', () => {
  R.forEach(name => {
    it(`contains "${name}"`, () => {
      expect(includedItemNames).toContain(name)
    })
  }, names)
})
