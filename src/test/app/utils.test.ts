import * as utils from 'app/utils'

describe('enumToArray', () => {
  enum EnumToTest {
    AAA,
    BBB,
  }

  it('converts enum to array of string values', () => {
    expect(utils.enumToArray<typeof EnumToTest>(EnumToTest)).toEqual(['AAA', 'BBB'])
  })
})
