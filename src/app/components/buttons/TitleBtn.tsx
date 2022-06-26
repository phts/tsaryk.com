import React from 'react'
import styled from 'styled-components'

import GenericLi from './generic/GenericLi'
import asBtn, {BtnProps} from './asBtn'

const TITLE = 'tsaryk.com'
const URL = 'http://tsaryk.com/'

const A = styled.a`
  color: inherit;
`

const TitleBtn: React.FunctionComponent<BtnProps> = ({flexBasis, flexible}) => (
  <GenericLi flexBasis={flexBasis} flexible={flexible}>
    <A href={URL}>{TITLE}</A>
  </GenericLi>
)

export default asBtn(TitleBtn)
