import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {GenericLi, GenericLiProps} from './GenericLi'

type Props = GenericLiProps & {
  borderStyle: string,
  fontSize: string,
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void,
  text: string,
}

interface ButtonProps {
  borderStyle: string
  fontSize: string
}

type ButtonElProps = ButtonProps & React.HTMLProps<HTMLButtonElement>
const button: StyledFunction<ButtonElProps> = styled.button
const Button = button`
  background: none;
  border: 0 none;
  border-bottom: ${props => props.borderStyle};
  color: inherit;
  cursor: pointer;
  font-size: ${props => props.fontSize};
  margin: 0;
  padding: 0;
`

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
