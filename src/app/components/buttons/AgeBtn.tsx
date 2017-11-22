import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {AgeStore} from 'app/stores/ageStore'
import {LangStore, Lang} from 'app/stores/langStore'

function padWithZero(value: number): string {
  return ('0' + value).slice(-2)
}

interface Props extends BaseProps {
  ageStore?: AgeStore
  langStore?: LangStore
}

const labels = {
  [Lang.EN]: {
    years: 'years',
    months: 'months',
    days: 'days',
    hours: 'hours',
    min: 'min',
    sec: 'sec',
  },
  [Lang.RU]: {
    years: 'лет',
    months: 'месяцев',
    days: 'дней',
    hours: 'часов',
    min: 'минут',
    sec: 'секунд',
  },
}

@inject('ageStore', 'langStore')
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
    const lang = this.props.langStore.lang
    const currentLabels = labels[lang]
    return `${years} ${currentLabels.years} \
      ${months} ${currentLabels.months} \
      ${days} ${currentLabels.days} \
      ${hours} ${currentLabels.hours} \
      ${padWithZero(minutes)} ${currentLabels.min} \
      ${padWithZero(seconds)} ${currentLabels.sec}`
  }
}
