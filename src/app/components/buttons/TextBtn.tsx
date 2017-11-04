import * as React from 'react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'

type Props = BaseProps

export class TextBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      category={this.props.category}
      size={this.props.size}
      text={this.props.text}
      width={this.props.width}
      onClick={this.onClick}
    />
  }

  private onClick = () => {
    // empty
  }
}
