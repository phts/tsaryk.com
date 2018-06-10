import * as React from 'react'
import styled from 'styled-components'

import GenericLi from './generic/GenericLi'
import asBtn, {BtnProps} from './asBtn'

const TITLE = 'tsarik.me'
const URL = 'http://tsarik.me/'

const TitleBtn: React.StatelessComponent<BtnProps> = ({flexBasis, flexible}) => (
  <GenericLi flexBasis={flexBasis} flexible={flexible}>
    <A href={URL}>{TITLE}</A>
  </GenericLi>
)

const A = styled.a`
  color: inherit;
`

export default asBtn(TitleBtn)
