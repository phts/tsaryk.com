import Phts from 'components/Phts'
import React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericLi from './generic/GenericLi'
import GenericLink from './generic/GenericLink'

const PhtsBtn: React.FunctionComponent<BtnProps> = (props) => (
  <GenericLi flexBasis={props.flexBasis} flexible={props.flexible}>
    <GenericLink buttonType={props.buttonType} fontSize={props.fontSize} onClick={props.onNavigate} to={props.itemId}>
      <Phts />
    </GenericLink>
  </GenericLi>
)

export default asBtn(PhtsBtn)
