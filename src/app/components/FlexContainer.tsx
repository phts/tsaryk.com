import styled from 'styled-components'

export default styled.div`
  background-color: ${props => props.theme.backgroundColor};
  box-sizing: border-box;
  color: ${props => props.theme.color};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`
