import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'

class FeedbackBtn extends React.PureComponent<BtnProps> {
  render() {
    return <GenericBtn
      buttonType={this.props.buttonType}
      flexBasis={this.props.flexBasis}
      fontSize={this.props.fontSize}
      onClick={this.onClick}
      text={this.props.text}
    />
  }

  private onClick = () => {
    window.open('mailto:phil.tsarik@gmail.com?subject=tsarik.me%20feedback')
  }
}

export default asBtn(FeedbackBtn)
