import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

class FeedbackBtn extends React.PureComponent<BtnProps> {
  render() {
    return (
      <GenericLi flexBasis={this.props.flexBasis}>
        <GenericBtn
          buttonType={this.props.buttonType}
          fontSize={this.props.fontSize}
          onClick={this.onClick}
          text={this.props.text}
        />
      </GenericLi>
    )
  }

  private onClick = () => {
    window.open('mailto:phil.tsarik@gmail.com?subject=tsarik.me%20feedback')
  }
}

export default asBtn(FeedbackBtn)
