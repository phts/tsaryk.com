import styled, {StyledFunction} from 'app/styled-components'
import {ButtonElementProps} from 'app/helpers/types'

interface Props extends ButtonElementProps {
  border?: string
  fontSize?: string
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
