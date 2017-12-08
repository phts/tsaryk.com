import {observable} from 'mobx'
import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addYears,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears,
} from 'date-fns'

const DATE_OF_BIRTH: Date = new Date(1987, 11, 3, 10, 30, 0)

interface Age {
  days?: number
  hours?: number
  minutes?: number
  months?: number
  seconds?: number
  years?: number
}

type AgePart = keyof Age

const addMethods: {[index in AgePart]: (date: Date, num: number) => Date} = {
  days: addDays,
  hours: addHours,
  minutes: addMinutes,
  months: addMonths,
  seconds: (date: Date) => date,
  years: addYears,
}

const diffMethods: {[index in AgePart]: (l: Date, r: Date) => number} = {
  days: differenceInDays,
  hours: differenceInHours,
  minutes: differenceInMinutes,
  months: differenceInMonths,
  seconds: differenceInSeconds,
  years: differenceInYears,
}

export class AgeStore {
  @observable age: Age

  private initialTime: Date

  constructor(initialTime?: Date) {
    this.initialTime = initialTime || new Date()

    const [age] = this.reduceDate(DATE_OF_BIRTH, [
      'years',
      'months',
      'days',
      'hours',
      'minutes',
      'seconds',
    ])
    this.age = age

    setInterval(() => {
      this.inc()
    }, 1000)
  }

  private reduceDate(date: Date, parts: AgePart[]): [Age, Date] {
    const reducedParts: Age = {}
    const reducedDate: Date = parts.reduce((acc, value) => {
      const diffVal = diffMethods[value](this.initialTime, acc)
      reducedParts[value] = diffVal
      return addMethods[value](acc, diffVal)
    }, date)
    return [reducedParts, reducedDate]
  }

  private inc() {
    const {months, years} = this.age
    let {seconds, minutes, hours, days} = this.age

    seconds++
    if (seconds >= 60) {
      seconds = 0
      minutes++
    }
    if (minutes >= 60) {
      minutes = 0
      hours++
    }
    if (hours >= 24) {
      hours = 0
      days++
    }
    this.age = {seconds, minutes, hours, days, months, years}
  }
}

export const ageStore = new AgeStore()
