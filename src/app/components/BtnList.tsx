import styled, {StyledFunction} from 'app/styled-components'

interface Props {
  flexible: boolean
}

export default (styled.ul as StyledFunction<Props>)`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${({flexible}) => flexible ? 'space-around' : 'flex-start'};
  margin: 0;
  min-width: 100%;
  padding: 0.5rem 0;
`
