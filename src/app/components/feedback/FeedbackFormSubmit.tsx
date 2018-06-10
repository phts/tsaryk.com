import * as React from 'react'
import styled from 'app/styled-components'

import EnterSymbol from './EnterSymbol'

export default (
  () => (
    <Button type="submit">
      <EnterSymbol/>
    </Button>
  )
) as React.StatelessComponent

const Button = styled.button`
  background: none;
  border: 0 none;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: 18px;
  margin: 0;
  padding: 0;
`
