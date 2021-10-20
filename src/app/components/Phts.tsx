import React from 'react'
import styled, {css} from 'styled-components'

const phtsCss = css`
  font-family: Microgramma, sans-serif;
  letter-spacing: 0.05rem;
`

const Span = styled.span`
  ${phtsCss}
`

export const style = phtsCss.toString()

export default (props => <Span {...props}>PHTS</Span>) as React.FunctionComponent<
  React.HTMLAttributes<HTMLSpanElement>
>
