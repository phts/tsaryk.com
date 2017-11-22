import * as React from 'react'

import {GenericLi} from './generic'
import {BaseBtnComponent} from './BaseBtnComponent'

const TITLE = 'tsarik.me'
const URL = 'http://tsarik.me/'

export class TitleBtn extends BaseBtnComponent {
  render() {
    return <GenericLi flexBasis={this.flexBasis}>
      <a href={URL}>{TITLE}</a>
    </GenericLi>
  }
}
