import * as React from 'react'

import {Button} from './Button'
import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'app/helpers/buttons'

type Props = React.HTMLProps<HTMLButtonElement>

export const ActionButton: React.StatelessComponent<Props> = ({children, onClick}) => (
  <Button
    border={getBorder(BUTTON_TYPE.Action)}
    fontSize={DEFAULT_FONT_SIZE}
    onClick={onClick}
  >
    {children}
  </Button>
)
