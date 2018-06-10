import styled from 'app/styled-components'
import PagePadding from './PagePadding'

export default styled(PagePadding)`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color};
`
