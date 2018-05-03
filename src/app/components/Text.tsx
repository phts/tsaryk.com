import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

type Props = React.HTMLProps<HTMLSpanElement> & {
  fontSize?: string,
}

export default (styled.span as StyledFunction<Props>)`
  font-size: ${({fontSize}) => fontSize};
`
