import React, {useCallback} from 'react'

import useStores from 'hooks/useStores'
import {Mode} from 'stores/listStore'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

export default function ModeBtn(mode: Mode) {
  const AnyModeBtn: React.FunctionComponent<BtnProps> = props => {
    const {listStore, widthsStore} = useStores()

    const onClick = useCallback(() => {
      if (mode !== listStore.mode) {
        widthsStore.randomize(listStore.list)
      }
      listStore.setMode(mode)
    }, [])

    return (
      <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
        <GenericBtn buttonType={props.buttonType} fontSize={props.fontSize} onClick={onClick}>
          {props.text}
        </GenericBtn>
      </GenericLi>
    )
  }

  return asBtn(AnyModeBtn)
}
