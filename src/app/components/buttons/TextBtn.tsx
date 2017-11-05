import * as React from 'react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'

type Props = BaseProps

export class TextBtn extends BaseBtnComponent<Props> {
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
    // empty
  }
}
