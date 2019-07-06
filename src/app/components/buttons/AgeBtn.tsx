import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {AgeStore} from 'stores/ageStore'
import {padWithZero} from 'utils/core'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

interface Props extends BtnProps {
  ageStore?: AgeStore
}

interface AgeItemData {
  days: string
  hours: string
  min: string
  months: string
  sec: string
  years: string
}

@inject('ageStore')
@observer
class AgeBtn extends React.Component<Props> {
  render() {
    return (
      <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
        <GenericBtn
          buttonType={this.props.buttonType}
          fontSize={this.props.fontSize}
        >{this.text}</GenericBtn>
      </GenericLi>
    )
  }

  private get text() {
    const {years, months, days, hours, minutes, seconds} = this.props.ageStore.age
    const labels = this.props.data as AgeItemData
    return `${years} ${labels.years} \
      ${months} ${labels.months} \
      ${days} ${labels.days} \
      ${hours} ${labels.hours} \
      ${padWithZero(minutes)} ${labels.min} \
      ${padWithZero(seconds)} ${labels.sec}`
  }
}

export default asBtn(AgeBtn)
