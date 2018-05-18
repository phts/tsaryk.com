import styled, {StyledFunction} from 'styled-components'
import {CommonElementProps} from 'app/helpers/types'

type Props = CommonElementProps<HTMLButtonElement> & {
  border?: string,
  fontSize?: string,
}

export default (styled.button as StyledFunction<Props>)`
  background: none;
  border: 0 none;
  border-bottom: ${({border}) => border};
  color: inherit;
  cursor: pointer;
  font-size: ${({fontSize}) => fontSize};
  margin: 0;
  padding: 0 2px;
`
