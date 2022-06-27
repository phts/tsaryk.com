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

const Span = styled.span`
  font-family: monospace;
`

const Indicator: React.FunctionComponent<Props> = ({state}) => (
  <Span>
    {state === IndicatorState.Processing ? <Spinner /> : ''}
    {state === IndicatorState.Success ? <SuccessSymbol /> : ''}
    {state === IndicatorState.Failed ? <FailedSymbol /> : ''}
  </Span>
)

export default Indicator
