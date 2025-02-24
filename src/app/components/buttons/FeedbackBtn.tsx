import React, {useCallback, useState} from 'react'

import FeedbackForm from 'components/feedback/FeedbackForm'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

interface FeedbackItemData {
  sayHello: string
}

const FeedbackBtn: React.FunctionComponent<BtnProps> = (props) => {
  const [isOpen, setOpen] = useState(false)

  const onClick = useCallback(() => {
    setOpen(true)
  }, [])

  const onFinished = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
      {isOpen ? (
        <FeedbackForm onFinished={onFinished} placeholder={(props.data as FeedbackItemData).sayHello} />
      ) : (
        <GenericBtn buttonType={props.buttonType} fontSize={props.fontSize} onClick={onClick}>
          {props.text}
        </GenericBtn>
      )}
    </GenericLi>
  )
}

export default asBtn(FeedbackBtn)
