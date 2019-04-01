import styled from 'styled-components'

import {blinkAnimation} from 'helpers/css'

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
