import styled from 'app/styled-components'

export default styled.div`
  display: flex;
  min-height: 0;
  min-width: 0;
  padding: 2rem 0;

  & > * {
    flex: 1 1 auto;
    margin: 0 0 0 6%;

    &:first-child {
      margin-left: 0;
    }
  }
`
