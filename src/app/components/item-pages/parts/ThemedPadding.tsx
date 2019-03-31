import styled from 'app/styled-components'
import Padding from './Padding'

export default styled(Padding)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`
