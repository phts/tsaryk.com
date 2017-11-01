import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface Props {
  text: string;
  width: number;
}

interface LiProps {
  width: number;
}

const Button = styled.button`
  background: none;
  border: 0 none;
  border-bottom: 1px dashed;
  color: inherit;
  cursor: pointer;
  margin: 0;
  padding: 0;
`

const li: StyledFunction<LiProps & React.HTMLProps<HTMLLIElement>> = styled.li
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
    return <Li width={this.props.width}><Button onClick={this.onClick}>{this.props.text}</Button></Li>
  }
}
