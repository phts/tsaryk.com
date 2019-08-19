import React from 'react'

import Text from 'components/Text'
import asBtn, {BtnProps} from './asBtn'
import GenericLi from './generic/GenericLi'
import GenericLink from './generic/GenericLink'

const TextBtn: React.FunctionComponent<BtnProps> = props => {
  if (!props.description && !props.data) {
    return (
      <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
        <Text fontSize={props.fontSize}>{props.text}</Text>
      </GenericLi>
    )
  }

  return (
    <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
      <GenericLink
        buttonType={props.buttonType}
        fontSize={props.fontSize}
        onClick={props.onNavigate}
        to={props.itemId}
      >
        {props.text}
      </GenericLink>
    </GenericLi>
  )
}

export default asBtn(TextBtn)
