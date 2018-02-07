import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  fontSize?: string,
  border?: string,
}

export const Button = (styled.button as StyledFunction<ButtonProps>)`
  background: none;
  border: 0 none;
  border-bottom: ${({border}) => border};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize};
  margin: 0;
  padding: 0;
`
