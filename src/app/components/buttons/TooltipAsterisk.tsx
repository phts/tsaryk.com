import React from 'react'
import styled from 'styled-components'

import {CommonElementProps} from 'helpers/types'

type Props = CommonElementProps<HTMLSpanElement>

const Asterisk = styled.span`
  color: #aa0000;
  cursor: help;
  font-size: 1.3rem;
  opacity: 0.5;
`

export default ((props) => <Asterisk {...props}>*</Asterisk>) as React.FunctionComponent<Props>
