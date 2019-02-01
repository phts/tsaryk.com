import styled from 'styled-components'
import {CommonElementProps} from 'helpers/types'

interface Props extends CommonElementProps<HTMLSpanElement> {
  fontSize?: string
}

export default styled.span<Props>`
  font-size: ${({fontSize}) => fontSize};
`
