import * as React from 'react'
import styled from 'styled-components'

import asBtn, {BtnProps} from './asBtn'


const CategoryBtn: React.StatelessComponent<BtnProps> = ({text}) => (
  <Li>
    # {text}
  </Li>
)

const Li = styled.li`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  font-size: 2em;
  list-style: none;
  margin-top: 1em;
  text-align: left;
  white-space: nowrap;

  &:first-child {
    margin-top: 0;
  }
`

export default asBtn(CategoryBtn)
