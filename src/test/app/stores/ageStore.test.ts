import * as MockDate from 'mockdate'
import {AgeStore, AgePart, Age} from 'app/stores/ageStore'

jest.mock('app/config', () => {
  return {
    DATE_OF_BIRTH: new Date(1987, 11, 3, 10, 30, 0),
  }
})

function expectAgeToEqual(age: Age, values: number[]) {
  ['years', 'months', 'days', 'hours', 'minutes', 'seconds']
    .forEach((m: AgePart, i) => {
      expect(age[m]).toBe(values[i])
    })
}

const daysInMonthsOf1988: {[index: number]: number} = {
  0: 31,
  1: 29,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
}

describe('AgeStore', () => {
  let ageStore: AgeStore

  beforeEach(() => {
    jest.useFakeTimers()
  })

  describe('when current date equals to date of birth', () => {
    beforeEach(() => {
      ageStore = new AgeStore(new Date(1987, 11, 3, 10, 30, 0))
    })

    it('sets initial age to zeros', () => {
      expectAgeToEqual(ageStore.age, [0, 0, 0, 0, 0, 0])
    })

    it('increments by 1 sec after one interval tick', () => {
      jest.runOnlyPendingTimers()
      expectAgeToEqual(ageStore.age, [0, 0, 0, 0, 0, 1])
    })
  })

  describe('when age is about to be 1 minute', () => {
    beforeEach(() => {
      ageStore = new AgeStore(new Date(1987, 11, 3, 10, 30, 59))
    })

    it('increases minutes after one interval tick', () => {
      expectAgeToEqual(ageStore.age, [0, 0, 0, 0, 0, 59])
      jest.runOnlyPendingTimers()
      expectAgeToEqual(ageStore.age, [0, 0, 0, 0, 1, 0])
    })
  })

  describe('when age is about to be 1 hour', () => {
    beforeEach(() => {
      ageStore = new AgeStore(new Date(1987, 11, 3, 11, 29, 59))
    })

    it('increases hours after one interval tick', () => {
      expectAgeToEqual(ageStore.age, [0, 0, 0, 0, 59, 59])
      jest.runOnlyPendingTimers()
      expectAgeToEqual(ageStore.age, [0, 0, 0, 1, 0, 0])
    })
  })

  describe('when age is about to be 1 day', () => {
    beforeEach(() => {
      ageStore = new AgeStore(new Date(1987, 11, 4, 10, 29, 59))
    })

    it('increases days after one interval tick', () => {
      expectAgeToEqual(ageStore.age, [0, 0, 0, 23, 59, 59])
      jest.runOnlyPendingTimers()
      expectAgeToEqual(ageStore.age, [0, 0, 1, 0, 0, 0])
    })
  })

  for (let m of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) {
    const dateMonth = m - 1
    const prevMonth = dateMonth - 1 < 0 ? 11 : dateMonth - 1
    const daysInPrevMonth = daysInMonthsOf1988[prevMonth]

    describe(`when age is about to be ${m} month`, () => {
      beforeEach(() => {
        const initialDate = new Date(1988, dateMonth, 3, 10, 29, 59)
        MockDate.set(initialDate)
        ageStore = new AgeStore(initialDate)
      })

      it('increases months after one interval tick', () => {
        expectAgeToEqual(ageStore.age, [0, dateMonth, daysInPrevMonth - 1, 23, 59, 59])
        jest.runOnlyPendingTimers()
        expectAgeToEqual(ageStore.age, [0, dateMonth + 1, 0, 0, 0, 0])
      })
    })
  }

  describe('when age is about to be 1 year', () => {
    beforeEach(() => {
      const initialDate = new Date(1988, 11, 3, 10, 29, 59)
      MockDate.set(initialDate)
      ageStore = new AgeStore(initialDate)
    })

    it('increases years after one interval tick', () => {
      expectAgeToEqual(ageStore.age, [0, 11, 29, 23, 59, 59])
      jest.runOnlyPendingTimers()
      expectAgeToEqual(ageStore.age, [1, 0, 0, 0, 0, 0])
    })
  })
})
