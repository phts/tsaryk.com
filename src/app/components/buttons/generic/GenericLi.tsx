import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {media} from 'app/helpers/css'

interface LiProps {
  flexBasis: number
}

export type GenericLiProps = LiProps

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.flexBasis}px;
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;

  ${media.mobile`
    flex-basis: ${props => props.flexBasis / 20}px;
  `}
  ${media.smartphone`
    flex-basis: ${props => props.flexBasis / 10}px;
  `}
  ${media.tablet`
    flex-basis: ${props => props.flexBasis / 5}px;
  `}
`

export const GenericLi: React.StatelessComponent<GenericLiProps> = props => (
  <Li flexBasis={props.flexBasis}>
    {props.children}
  </Li>
)
