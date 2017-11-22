import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
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
    const {years, months, days, hours, minutes, seconds} = this.props.ageStore.age
    return `${years} years \
      ${months} months \
      ${days} days \
      ${hours} hours \
      ${padWithZero(minutes)} min \
      ${padWithZero(seconds)} sec`
  }
}
