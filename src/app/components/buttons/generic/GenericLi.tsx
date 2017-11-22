import * as React from 'react'
import styled, {StyledFunction} from 'styled-components'

import {BtnDescription} from './BtnDescription'

export type GenericLiProps = LiProps & {
  description?: string | null,
}

interface LiProps {
  flexBasis: string
}

type LiElProps = LiProps & React.HTMLProps<HTMLLIElement>
const li: StyledFunction<LiElProps> = styled.li
const Li = li`
  flex-basis: ${props => props.flexBasis};
  margin: 0 1em;
  list-style: none;
  text-align: center;
  white-space: nowrap;
`

export class GenericLi extends React.Component<GenericLiProps, {}> {
  render() {
    const descrEl = this.props.description ?
      <BtnDescription>{this.props.description}</BtnDescription> :
      ''
    return <Li flexBasis={this.props.flexBasis}>
      {this.props.children}
      {descrEl}
    </Li>
  }
}
