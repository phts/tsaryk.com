import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface ButtonProps {
  borderStyle: string
  fontSize: string
}

type ButtonElProps = ButtonProps & React.HTMLProps<HTMLButtonElement>
const button: StyledFunction<ButtonElProps> = styled.button

export const Button = button`
  background: none;
  border: 0 none;
  border-bottom: ${props => props.borderStyle};
  color: inherit;
  cursor: pointer;
  font-size: ${props => props.fontSize};
  margin: 0;
  padding: 0;
`
