import React from 'react'
import styled from 'styled-components'
import {ButtonElementProps} from 'helpers/types'

interface Props extends ButtonElementProps {
  border?: string
  fontSize?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Button: React.FunctionComponent<Props> = ({border, fontSize, ...props}) => <button {...props} />

export default styled(Button)<Props>`
  background: none;
  border: 0 none;
  border-bottom: ${({border}) => border};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize};
  margin: 0;
  padding: 0 2px;
`
