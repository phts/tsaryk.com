import * as React from 'react'

import {Button} from 'app/components'
import {GenericLi, GenericLiProps} from './GenericLi'

type Props = GenericLiProps & {
  borderStyle: string,
  fontSize: string,
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

export class GenericBtn extends React.Component<Props, {}> {
  render() {
    return <GenericLi
              flexBasis={this.props.flexBasis}
              description={this.props.description}>
      <Button
          borderStyle={this.props.borderStyle}
          fontSize={this.props.fontSize}
          onClick={this.props.onClick}>
        {this.props.text}
      </Button>
    </GenericLi>
  }
}
