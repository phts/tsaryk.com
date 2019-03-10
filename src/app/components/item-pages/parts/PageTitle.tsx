import styled from 'app/styled-components'

const H1 = styled.h1.attrs({
  dangerouslySetInnerHTML: props => ({__html: props.children as string}),
})`
  margin: 0 0 1rem;
`

export default H1
