import {observer, inject} from 'mobx-react'

import {GenericBtn} from './GenericBtn'

function padWithZero(value: number): string {
  return ('0' + value).slice(-2)
}

@inject('ageStore')
@observer
export class AgeBtn extends GenericBtn {
  constructor() {
    super()

    setInterval(() => {
      this.props.ageStore.setCurrentTime(new Date())
    }, 1000)
  }

  protected get text() {
    const age = this.props.ageStore.age
    return `${age.years} years \
      ${age.months} months \
      ${age.days} days \
      ${age.hours} hours \
      ${padWithZero(age.minutes)} min \
      ${padWithZero(age.seconds)} sec`
  }
}
