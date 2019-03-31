import {enumToArray} from 'utils/core'

describe('enumToArray', () => {
  enum EnumToTest {
    AAA,
    BBB,
  }

  it('converts enum to array of string values', () => {
    expect(enumToArray<typeof EnumToTest>(EnumToTest)).toEqual(['AAA', 'BBB'])
  })
})
