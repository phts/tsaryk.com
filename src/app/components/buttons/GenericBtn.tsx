import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface Props {
  borderStyle: string
  flexBasis: string
  fontSize: string
  onClick?: (ev?: React.MouseEvent<HTMLButtonElement>) => void
  text: string
}

interface ButtonProps {
  borderStyle: string
  fontSize: string
}

interface LiProps {
  flexBasis: string
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

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.flexBasis};
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`

export class GenericBtn extends React.Component<Props, {}> {
  render() {
    return <Li flexBasis={this.props.flexBasis}>
      <Button
          onClick={this.props.onClick}
          fontSize={this.props.fontSize}
          borderStyle={this.props.borderStyle}>
        {this.props.text}
      </Button>
    </Li>
  }
}
