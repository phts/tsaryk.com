import React from 'react'

import Button from 'components/Button'
import {BUTTON_TYPE, getBorder} from 'helpers/buttons'
import {ButtonElementProps} from 'helpers/types'
import withTooltip from 'components/buttons/withTooltip'

interface Props extends ButtonElementProps {
  buttonType: BUTTON_TYPE
  fontSize: string
}

const GenericBtn: React.FunctionComponent<Props> = ({buttonType, fontSize, ...props}) => (
  <Button {...props} border={getBorder(buttonType)} fontSize={fontSize} />
)

export default withTooltip(GenericBtn)
