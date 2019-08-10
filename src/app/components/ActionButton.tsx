import React from 'react'

import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'helpers/buttons'
import {ButtonElementProps} from 'helpers/types'
import Button from './Button'

type Props = ButtonElementProps

export default ((props: Props) => (
  <Button {...props} border={getBorder(BUTTON_TYPE.Action)} fontSize={DEFAULT_FONT_SIZE} />
)) as React.StatelessComponent<Props>
