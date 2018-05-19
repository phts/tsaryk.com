import styled, {StyledFunction} from 'styled-components'

import {CommonElementProps} from 'app/helpers/types'

interface Props extends CommonElementProps<HTMLLIElement> {
  flexBasis: number
}

export default (styled.li as StyledFunction<Props>).attrs({
  style: (props: Props) => ({
    'flex-basis': `${props.flexBasis}vw`,
  }),
})`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`
