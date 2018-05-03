import * as React from 'react'

import Button from 'app/components/Button'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'

interface Props {
  buttonType: BUTTON_TYPE
  fontSize: string
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void
  text: string
}

const GenericBtn: React.StatelessComponent<Props> = props => (
  <Button
      border={getBorder(props.buttonType)}
      fontSize={props.fontSize}
      onClick={props.onClick}>
    {props.text}
  </Button>
)

export default GenericBtn
