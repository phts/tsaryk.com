import * as React from 'react'

import {BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {getRandomCssColor} from 'app/utils'

export class ColorsBtn extends BaseBtnComponent {
  render() {
    return <GenericBtn
      borderStyle={this.borderStyle}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      onClick={this.onClick}
      text={this.text}
    />
  }

  private onClick = () => {
    document.body.style.backgroundColor = getRandomCssColor()
    document.body.style.color = getRandomCssColor()
  }
}
