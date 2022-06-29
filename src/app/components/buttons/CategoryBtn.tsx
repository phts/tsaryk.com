import React from 'react'
import styled from 'styled-components'

import asBtn, {BtnProps} from './asBtn'

const Li = styled.li`
  align-items: center;
  display: flex;
  flex-basis: 100%;
  font-size: 2rem;
  list-style: none;
  margin-top: 1rem;
  text-align: left;
  white-space: nowrap;

  &:first-child {
    margin-top: 0;
  }
`

const CategoryBtn: React.FunctionComponent<BtnProps> = ({text}) => <Li># {text}</Li>

export default asBtn(CategoryBtn)
