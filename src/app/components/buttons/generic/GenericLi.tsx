import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {CommonElementProps} from 'app/helpers/types'

interface LiProps {
  flexBasis: number
}

export type GenericLiProps = LiProps

type LiElProps = LiProps & CommonElementProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li.attrs({
  style: (props: LiElProps) => ({
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

const GenericLi: React.StatelessComponent<GenericLiProps> = props => (
  <Li flexBasis={props.flexBasis}>
    {props.children}
  </Li>
)

export default GenericLi
