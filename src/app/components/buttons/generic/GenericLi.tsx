import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {media} from 'app/helpers/css'
import {CommonElementProps} from 'app/helpers/types'

interface LiProps {
  flexBasis: number
}

export type GenericLiProps = LiProps

type LiElProps = LiProps & CommonElementProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  align-items: center;
  display: flex;
  flex-basis: ${props => props.flexBasis}px;
  flex-grow: 1;
  justify-content: center;
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;

  ${media.max.mobile`
    flex-basis: ${props => props.flexBasis / 20}px;
  `}
  ${media.max.smartphone`
    flex-basis: ${props => props.flexBasis / 10}px;
  `}
  ${media.max.tablet`
    flex-basis: ${props => props.flexBasis / 5}px;
  `}
`

const GenericLi: React.StatelessComponent<GenericLiProps> = props => (
  <Li flexBasis={props.flexBasis}>
    {props.children}
  </Li>
)

export default GenericLi
