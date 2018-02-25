import * as React from 'react'

import BaseBtnComponent from './BaseBtnComponent'
import GenericLink from './generic/GenericLink'
import {BUTTON_TYPE} from 'app/helpers/buttons'

class TextBtn extends BaseBtnComponent {
  render() {
    return <GenericLink
      buttonType={this.textBtnButtonType}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      text={this.text}
      to={this.props.item.id}
    />
  }

  private get textBtnButtonType() {
    if (!this.props.item.description) {
      // DEBUG: To improve visibility of missing description.
      // To be removed.
      return BUTTON_TYPE.Simple
    }
    return this.buttonType
  }
}

export default TextBtn
