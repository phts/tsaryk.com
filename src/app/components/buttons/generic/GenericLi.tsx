import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

interface LiProps {
  flexBasis: string
}

export type GenericLiProps = LiProps

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.flexBasis};
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`

export const GenericLi: React.StatelessComponent<GenericLiProps> = props => (
  <Li flexBasis={props.flexBasis}>
    {props.children}
  </Li>
)
