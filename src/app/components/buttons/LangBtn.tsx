import React, {useCallback} from 'react'

import useStores from 'hooks/useStores'
import {Lang} from 'stores/langStore'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

export default function LangBtn(lang: Lang) {
  const AnyLangBtn: React.FunctionComponent<BtnProps> = props => {
    const {langStore} = useStores()

    const onClick = useCallback(() => {
      langStore.setLang(lang)
    }, [])

    return (
      <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
        <GenericBtn
          buttonType={props.buttonType}
          fontSize={props.fontSize}
          onClick={onClick}
          title={props.tooltip}
        >
          {props.text}
        </GenericBtn>
      </GenericLi>
    )
  }

  return asBtn(AnyLangBtn)
}
