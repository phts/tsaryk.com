import * as React from 'react'
import styled from 'styled-components'

import asBtn, {BtnProps} from './asBtn'


const CategoryBtn: React.StatelessComponent<BtnProps> = ({text}) => (
  <Li>
    # {text}
  </Li>
)

const Li = styled.li`
  display: flex;
  flex-basis: 100%;
  font-size: 2em;
  list-style: none;
  text-align: left;
  white-space: nowrap;
`

export default asBtn(CategoryBtn)
