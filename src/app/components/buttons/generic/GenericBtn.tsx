import * as React from 'react'

import {Button} from 'app/components'
import {GenericLi, GenericLiProps} from './GenericLi'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'

type Props = GenericLiProps & {
  buttonType: BUTTON_TYPE,
  fontSize: string,
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

export const GenericBtn: React.StatelessComponent<Props> = props => (
  <GenericLi flexBasis={props.flexBasis}>
    <Button
        border={getBorder(props.buttonType)}
        fontSize={props.fontSize}
        onClick={props.onClick}>
      {props.text}
    </Button>
  </GenericLi>
)
