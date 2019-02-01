import styled from 'app/styled-components'
import {CommonElementProps} from 'app/helpers/types'

interface Props extends CommonElementProps<HTMLSpanElement> {
  fontSize?: string
}

export default styled.span<Props>`
  font-size: ${({fontSize}) => fontSize};
`
