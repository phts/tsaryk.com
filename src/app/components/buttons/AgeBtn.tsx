import React from 'react'
import {observer} from 'mobx-react'

import useStores from 'hooks/useStores'
import {AgeStore} from 'stores/ageStore'
import {padWithZero} from 'utils/core'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

interface AgeItemData {
  days: string
  hours: string
  min: string
  months: string
  sec: string
  years: string
}

function text(ageStore: AgeStore, data: AgeItemData): string {
  const {years, months, days, hours, minutes, seconds} = ageStore.age
  return `${years} ${data.years} \
      ${months} ${data.months} \
      ${days} ${data.days} \
      ${hours} ${data.hours} \
      ${padWithZero(minutes)} ${data.min} \
      ${padWithZero(seconds)} ${data.sec}`
}

const AgeBtn: React.FunctionComponent<BtnProps> = ({flexBasis, flexible, buttonType, fontSize, data}) => {
  const {ageStore} = useStores()
  return (
    <GenericLi flexBasis={flexBasis} flexible={flexible}>
      <GenericBtn buttonType={buttonType} fontSize={fontSize}>
        {text(ageStore, data as AgeItemData)}
      </GenericBtn>
    </GenericLi>
  )
}

export default asBtn(observer(AgeBtn))
