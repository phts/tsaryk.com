import {Link, LinkProps} from 'react-router-dom'
import styled, {StyledFunction} from 'app/styled-components'

import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'

interface Props extends LinkProps {
  buttonType: BUTTON_TYPE
  fontSize: string
}

export default (styled(Link) as StyledFunction<Props>).attrs({
  dangerouslySetInnerHTML: props => ({__html: props.children as string}),
})`
  border-bottom: ${props => getBorder(props.buttonType)};
  color: inherit;
  font-size: ${props => props.fontSize};
  text-decoration: none;
`
