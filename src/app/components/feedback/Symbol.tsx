import styled from 'app/styled-components'

import {blinkAnimation} from 'app/helpers/css'

interface Props {
  color: string
  cssSymbol: string
}

export default (props: Props) => styled.span`
  ${blinkAnimation}
  color: ${props.color};
  &::after {
    content: '\\${props.cssSymbol}';
  }
`
