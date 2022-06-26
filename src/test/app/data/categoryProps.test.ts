import * as R from 'ramda'
import {categoryPropsMap, CategoryProps} from 'data/categoryProps'
import {KnownName, Names} from 'data/names'
import {enumToArray} from 'utils/core'

type KnownNames = KnownName[]

const includedItemNames: KnownNames = R.compose<
  {[key: string]: CategoryProps},
  Array<[string, CategoryProps]>,
  string[]
>(
  R.map((pair: [string, CategoryProps]) => pair[0]),
  R.toPairs
)(categoryPropsMap) as KnownNames

const names: string[] = enumToArray(Names) as string[]

describe('categoryPropsMap', () => {
  R.forEach((name) => {
    it(`contains "${name}"`, () => {
      expect(includedItemNames).toContain(name)
    })
  }, names)
})
