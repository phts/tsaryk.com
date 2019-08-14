import React, {useCallback} from 'react'
import * as R from 'ramda'

import useStores from 'hooks/useStores'
import {getRandomCssColor} from 'helpers/css'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

const ColorsBtn: React.FunctionComponent<BtnProps> = props => {
  const {uiStore} = useStores()

  const onClick = useCallback(() => {
    uiStore.backgroundColor = getRandomCssColor()
    uiStore.color = getRandomCssColor()
  }, [])

  return (
    <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
      <GenericBtn buttonType={props.buttonType} fontSize={props.fontSize} onClick={onClick}>
        {props.text}
      </GenericBtn>
    </GenericLi>
  )
}

export default R.compose(asBtn)(ColorsBtn)
