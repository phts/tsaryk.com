import * as React from 'react'
import {observer, inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import {AgeStore} from 'app/stores/ageStore'
import {padWithZero} from 'app/utils/core'

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
class AgeBtn extends React.PureComponent<Props> {
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
