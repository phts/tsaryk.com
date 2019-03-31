import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericLi from './generic/GenericLi'
import GenericLink from './generic/GenericLink'
import Text from 'components/Text'

class TextBtn extends React.PureComponent<BtnProps> {
  render() {
    if (!this.props.description && !this.props.data) {
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
          buttonType={this.props.buttonType}
          fontSize={this.props.fontSize}
          onClick={this.props.onNavigate}
          to={this.props.itemId}
        >{this.props.text}</GenericLink>
      </GenericLi>
    )
  }
}

export default asBtn(TextBtn)
