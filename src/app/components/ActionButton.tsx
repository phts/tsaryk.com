import * as React from 'react'

import Button from './Button'
import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'app/helpers/buttons'
import {CommonElementProps} from 'app/helpers/types'

type Props = CommonElementProps<HTMLButtonElement>

export default (
  ({children, onClick}) => (
    <Button
      border={getBorder(BUTTON_TYPE.Action)}
      fontSize={DEFAULT_FONT_SIZE}
      onClick={onClick}
    >
      {children}
    </Button>
  )
) as React.StatelessComponent<Props>
