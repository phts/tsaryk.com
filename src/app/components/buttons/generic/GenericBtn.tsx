import * as React from 'react'

import {Button, BUTTON_TYPE} from 'app/components'
import {GenericLi, GenericLiProps} from './GenericLi'

type Props = GenericLiProps & {
  buttonType: BUTTON_TYPE,
  fontSize: string,
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

export class GenericBtn extends React.Component<Props, {}> {
  render() {
    return <GenericLi flexBasis={this.props.flexBasis}>
      <Button
          type={this.props.buttonType}
          fontSize={this.props.fontSize}
          onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    </GenericLi>
  }
}
