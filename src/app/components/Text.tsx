import styled, {StyledFunction} from 'styled-components'
import {CommonElementProps} from 'app/helpers/types'

type Props = CommonElementProps<HTMLSpanElement> & {
  fontSize?: string,
}

export default (styled.span as StyledFunction<Props>)`
  font-size: ${({fontSize}) => fontSize};
`
