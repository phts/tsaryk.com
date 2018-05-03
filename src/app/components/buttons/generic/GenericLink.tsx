import * as React from 'react'
import {Link, LinkProps} from 'react-router-dom'
import styled, {StyledFunction} from 'styled-components'

import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'

interface Props {
  buttonType: BUTTON_TYPE
  fontSize: string
  text: string
  to: string
}

const GenericLink: React.StatelessComponent<Props> = props => (
  <StyledLink
    to={props.to}
    buttonType={props.buttonType}
    fontSize={props.fontSize}
  >
    {props.text}
  </StyledLink>
)

type StyledLinkProps = LinkProps & {
  buttonType: BUTTON_TYPE,
  fontSize: string,
}

const StyledLink = (styled(Link) as StyledFunction<StyledLinkProps>)`
  border-bottom: ${props => getBorder(props.buttonType)};
  color: inherit;
  font-size: ${props => props.fontSize};
  text-decoration: none;
`

export default GenericLink
