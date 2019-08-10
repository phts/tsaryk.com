import React from 'react'
import styled from 'styled-components'

import Spinner from './Spinner'
import SuccessSymbol from './SuccessSymbol'
import FailedSymbol from './FailedSymbol'

export enum IndicatorState {
  Processing,
  Success,
  Failed,
}

interface Props {
  state: IndicatorState
}

const Indicator: React.StatelessComponent<Props> = ({state}) => (
  <Span>
    {state === IndicatorState.Processing ? <Spinner /> : ''}
    {state === IndicatorState.Success ? <SuccessSymbol /> : ''}
    {state === IndicatorState.Failed ? <FailedSymbol /> : ''}
  </Span>
)

const Span = styled.span`
  font-family: monospace;
`

export default Indicator
