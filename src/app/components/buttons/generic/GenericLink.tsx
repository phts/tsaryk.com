import React from 'react'
import {Link, LinkProps} from 'react-router-dom'
import styled from 'styled-components'

import {BUTTON_TYPE, getBorder} from 'helpers/buttons'

interface Props extends LinkProps {
  buttonType: BUTTON_TYPE
  fontSize: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PureLink: React.FunctionComponent<Props> = ({buttonType, fontSize, ...props}) => (
  <Link {...props} />
)

export default styled(PureLink)<Props>`
  border-bottom: ${(props) => getBorder(props.buttonType)};
  color: inherit;
  font-size: ${(props) => props.fontSize};
  text-decoration: none;
`
