import * as React from 'react'
import styled from 'styled-components'

import {blinkAnimation} from 'app/helpers/css'

export default () => (
  <Span>&#10008;</Span>
)

const Span = styled.span`
  ${blinkAnimation}

  color: red;
`
