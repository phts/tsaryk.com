import * as React from 'react'
import styled from 'styled-components'

import GenericLi from './generic/GenericLi'
import BaseBtnComponent from './BaseBtnComponent'

const TITLE = 'tsarik.me'
const URL = 'http://tsarik.me/'

class TitleBtn extends BaseBtnComponent {
  render() {
    return <GenericLi flexBasis={this.flexBasis}>
      <A href={URL}>{TITLE}</A>
    </GenericLi>
  }
}

const A = styled.a`
  color: inherit;
`

export default TitleBtn
