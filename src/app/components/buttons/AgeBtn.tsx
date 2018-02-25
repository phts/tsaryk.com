import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {AgeStore} from 'app/stores/ageStore'
import {I18nStore} from 'app/stores/i18nStore'
import {padWithZero} from 'app/utils/core'

interface Props extends BaseProps {
  ageStore?: AgeStore
  i18nStore?: I18nStore
}

@inject('ageStore', 'i18nStore')
@observer
export class AgeBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      buttonType={this.buttonType}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      text={this.text}
    />
  }

  protected get text() {
    const {years, months, days, hours, minutes, seconds} = this.props.ageStore.age
    const labels = this.props.i18nStore.labels
    return `${years} ${labels.years} \
      ${months} ${labels.months} \
      ${days} ${labels.days} \
      ${hours} ${labels.hours} \
      ${padWithZero(minutes)} ${labels.min} \
      ${padWithZero(seconds)} ${labels.sec}`
  }
}
