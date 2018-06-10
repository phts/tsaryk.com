import styled, {StyledFunction} from 'styled-components'

import {CommonElementProps} from 'app/helpers/types'

interface Props extends CommonElementProps<HTMLDivElement> {
  backgroundColor?: string
  fontColor?: string
}

export default (styled.div as StyledFunction<Props>)`
  background-color: ${({backgroundColor}) => backgroundColor};
  box-sizing: border-box;
  color: ${({fontColor}) => fontColor};
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
`
