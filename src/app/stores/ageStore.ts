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

import {daysInMonth} from 'utils/date'
import {DATE_OF_BIRTH} from 'config'

export interface Age {
  days?: number
  hours?: number
  minutes?: number
  months?: number
  seconds?: number
  years?: number
}

export type AgePart = keyof Age

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

const agePartsMaxValues: {[index in AgePart]: () => number} = {
  seconds: () => 60,
  minutes: () => 60,
  hours: () => 24,
  days: () => {
    const currentDate = new Date()
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getMonth()
    return daysInMonth(currentDate.getFullYear(), prevMonth)
  },
  months: () => 12,
  years: () => 999,
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
    const {minutes, hours, days, months, years} = this.age

    this.age = this.conformAge({
      seconds: this.age.seconds + 1,
      minutes,
      hours,
      days,
      months,
      years,
    })
  }

  private conformAge(rawNewAge: Age) {
    const parts: AgePart[] = ['seconds', 'minutes', 'hours', 'days', 'months', 'years']
    parts.forEach((part: AgePart, i) => {
      if (rawNewAge[part] < agePartsMaxValues[part]()) {
        return false
      }
      rawNewAge[part] = 0
      rawNewAge[parts[i + 1]]++
      return true
    })

    return rawNewAge
  }
}

export default new AgeStore()
