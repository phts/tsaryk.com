import {Link, LinkProps} from 'react-router-dom'
import styled, {StyledFunction} from 'styled-components'

import {BUTTON_TYPE, getBorder} from 'helpers/buttons'

interface Props extends LinkProps {
  buttonType: BUTTON_TYPE
  fontSize: string
}

export default (styled(Link) as StyledFunction<Props>)`
  border-bottom: ${props => getBorder(props.buttonType)};
  color: inherit;
  font-size: ${props => props.fontSize};
  text-decoration: none;
`
