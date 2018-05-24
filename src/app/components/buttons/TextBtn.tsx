import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericLi from './generic/GenericLi'
import GenericLink from './generic/GenericLink'
import {BUTTON_TYPE} from 'app/helpers/buttons'
import Text from 'app/components/Text'

class TextBtn extends React.PureComponent<BtnProps> {
  render() {
    if (!this.props.description) {
      return (
        <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
          <Text fontSize={this.props.fontSize}>
            {this.props.text}
          </Text>
        </GenericLi>
      )
    }

    return (
      <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
        <GenericLink
          buttonType={this.textBtnButtonType}
          fontSize={this.props.fontSize}
          onClick={this.props.onNavigate}
          to={this.props.itemId}
        >{this.props.text}</GenericLink>
      </GenericLi>
    )
  }

  private get textBtnButtonType() {
    if (!this.props.description) {
      return BUTTON_TYPE.Simple
    }
    return this.props.buttonType
  }
}

export default asBtn(TextBtn)
