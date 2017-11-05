import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {AgeStore} from 'app/stores/ageStore'

function padWithZero(value: number): string {
  return ('0' + value).slice(-2)
}

interface Props extends BaseProps {
  ageStore?: AgeStore
}

@inject('ageStore')
@observer
export class AgeBtn extends BaseBtnComponent<Props> {
  constructor() {
    super()

    setInterval(() => {
      this.props.ageStore.setCurrentTime(new Date())
    }, 1000)
  }

  render() {
    return <GenericBtn
      borderStyle={this.borderStyle}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      onClick={() => ({})}
      text={this.text}
    />
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
