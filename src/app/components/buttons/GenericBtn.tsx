import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {ListStore} from 'app/stores/listStore'

export enum BtnSize {
  M = '10pt',
  L = '12pt',
  XL = '14pt',
  XXL = '16pt',
}

interface Props {
  text: string
  listStore?: ListStore
  size?: BtnSize
  width?: number
}

interface ButtonProps {
  fontSize: string
}

interface LiProps {
  width: number
}

type ButtonElProps = ButtonProps & React.HTMLProps<HTMLButtonElement>
const button: StyledFunction<ButtonElProps> = styled.button
const Button = button`
  background: none;
  border: 0 none;
  border-bottom: 1px dashed;
  color: inherit;
  cursor: pointer;
  font-size: ${(props: ButtonElProps) => props.fontSize};
  margin: 0;
  padding: 0;
`

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.width}px;
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`

export class GenericBtn extends React.Component<Props, {}> {
  constructor() {
    super()
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
  }

  render() {
    const fontSize = this.props.size || BtnSize.M
    return <Li width={this.props.width}>
      <Button onClick={this.onClick} fontSize={fontSize}>{this.props.text}</Button>
    </Li>
  }
}
