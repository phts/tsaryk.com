import {observable, action, computed} from 'mobx'
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

type DatePart = keyof Age

const addMethods: {[index: string]: (date: Date, num: number) => Date} = {
  days: addDays,
  hours: addHours,
  minutes: addMinutes,
  months: addMonths,
  seconds: (date: Date) => date,
  years: addYears,
}

const diffMethods: {[index: string]: (l: Date, r: Date) => number} = {
  days: differenceInDays,
  hours: differenceInHours,
  minutes: differenceInMinutes,
  months: differenceInMonths,
  seconds: differenceInSeconds,
  years: differenceInYears,
}

interface Age {
  days: number
  hours: number
  minutes: number
  months: number
  seconds: number
  years: number
}

type DatePartsStore = {
  [index: string]: number,
}

export class AgeStore {
  @observable currentTime: Date = new Date()

  private cached: DatePartsStore
  private minsAndSeconds: Date

  constructor() {
    const [reducedParts, reducedDate] = this.reduceDate(DATE_OF_BIRTH, [
      'years',
      'months',
      'days',
      'hours',
    ])
    this.cached = reducedParts
    this.minsAndSeconds = reducedDate
  }

  @computed
  get age(): Age {
    const [reducedParts] = this.reduceDate(this.minsAndSeconds, [
      'minutes',
      'seconds',
    ])
    const minutes = reducedParts.minutes
    const seconds = reducedParts.seconds
    const obj: Age = {
      days: this.cached.days,
      hours: this.cached.hours,
      minutes,
      months: this.cached.months,
      seconds,
      years: this.cached.years,
    }
    return obj
  }

  @action
  setCurrentTime(currentTime: Date): void {
    this.currentTime = currentTime
  }

  private reduceDate(date: Date, parts: DatePart[]): [DatePartsStore, Date] {
    const reducedParts: DatePartsStore = {}
    const reducedDate: Date = parts.reduce((acc, value) => {
      const diffVal = diffMethods[value](this.currentTime, acc)
      reducedParts[value] = diffVal
      return addMethods[value](acc, diffVal)
    }, date)
    return [reducedParts, reducedDate]
  }
}

export const ageStore = new AgeStore()
