import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericLink from './generic/GenericLink'
import {BUTTON_TYPE} from 'app/helpers/buttons'

class TextBtn extends React.PureComponent<BtnProps> {
  render() {
    return <GenericLink
      buttonType={this.textBtnButtonType}
      flexBasis={this.props.flexBasis}
      fontSize={this.props.fontSize}
      text={this.props.text}
      to={this.props.itemId}
    />
  }

  private get textBtnButtonType() {
    if (!this.props.description) {
      // DEBUG: To improve visibility of missing description.
      // To be removed.
      return BUTTON_TYPE.Simple
    }
    return this.props.buttonType
  }
}

export default asBtn(TextBtn)
