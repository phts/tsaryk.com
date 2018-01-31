import * as React from 'react'
import styled from 'styled-components'

export const Viewport: React.StatelessComponent = ({children}) => (
  <Div>
    {children}
  </Div>
)

const Div = styled.div`
  display: flex;
  height: 100vh;
`
