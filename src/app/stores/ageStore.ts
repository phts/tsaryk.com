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

enum DatePart {
  Days,
  Hours,
  Minutes,
  Months,
  Seconds,
  Years,
}

const addMethods = {
  [DatePart.Days]: addDays,
  [DatePart.Hours]: addHours,
  [DatePart.Minutes]: addMinutes,
  [DatePart.Months]: addMonths,
  [DatePart.Seconds]: (date: Date) => date,
  [DatePart.Years]: addYears,
}

const diffMethods = {
  [DatePart.Days]: differenceInDays,
  [DatePart.Hours]: differenceInHours,
  [DatePart.Minutes]: differenceInMinutes,
  [DatePart.Months]: differenceInMonths,
  [DatePart.Seconds]: differenceInSeconds,
  [DatePart.Years]: differenceInYears,
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
  [index: number]: number,
}

export class AgeStore {
  @observable currentTime: Date = new Date()

  private cached: DatePartsStore
  private minsAndSeconds: Date

  constructor() {
    const [reducedParts, reducedDate] = this.reduceDate(DATE_OF_BIRTH, [
      DatePart.Years,
      DatePart.Months,
      DatePart.Days,
      DatePart.Hours,
    ])
    this.cached = reducedParts
    this.minsAndSeconds = reducedDate
  }

  @computed
  get age(): Age {
    const [reducedParts] = this.reduceDate(this.minsAndSeconds, [
      DatePart.Minutes,
      DatePart.Seconds,
    ])
    const minutes = reducedParts[DatePart.Minutes]
    const seconds = reducedParts[DatePart.Seconds]
    const obj: Age = {
      days: this.cached[DatePart.Days],
      hours: this.cached[DatePart.Hours],
      minutes,
      months: this.cached[DatePart.Months],
      seconds,
      years: this.cached[DatePart.Years],
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
