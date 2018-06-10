import * as R from 'ramda'
import {categoryPropsMap} from 'app/data/categoryProps'
import {KnownName, Names} from 'app/data/names'
import {enumToArray} from 'app/utils/core'

const flatCategoryPropsMap: KnownName[] = R.compose(
  R.flatten,
  R.map((pair: [KnownName, {}]) => pair[0] as KnownName),
  R.toPairs,
)(categoryPropsMap) as KnownName[]

const namesArray: string[] = enumToArray(Names)

describe('categoryPropsMap', () => {
  R.forEach(name => {
    it(`contains "${name}"`, () => {
      expect(flatCategoryPropsMap).toContain(name)
    })
  }, namesArray)
})
