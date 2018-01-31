import * as React from 'react'

import {Button, BUTTON_TYPE} from 'app/components'
import {GenericLi, GenericLiProps} from './GenericLi'

type Props = GenericLiProps & {
  buttonType: BUTTON_TYPE,
  fontSize: string,
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

export const GenericBtn: React.StatelessComponent<Props> = props => (
  <GenericLi flexBasis={props.flexBasis}>
    <Button
        type={props.buttonType}
        fontSize={props.fontSize}
        onClick={props.onClick}>
      {props.text}
    </Button>
  </GenericLi>
)
