import styled, {StyledFunction} from 'styled-components'
import {CommonElementProps} from 'app/helpers/types'

interface Props extends CommonElementProps<HTMLSpanElement> {
  fontSize?: string
}

export default (styled.span as StyledFunction<Props>)`
  font-size: ${({fontSize}) => fontSize};
`
