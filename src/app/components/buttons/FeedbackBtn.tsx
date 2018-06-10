import * as React from 'react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import FeedbackForm from 'app/components/feedback/FeedbackForm'

type Props = BtnProps

interface State {
  open: boolean
}

interface FeedbackItemData {
  sayHello: string,
}

class FeedbackBtn extends React.PureComponent<Props, State> {
  constructor(props: BtnProps) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
      {
        this.state.open ?
          <FeedbackForm
            onFinished={this.onFinished}
            placeholder={(this.props.data as FeedbackItemData).sayHello}
          /> :
          <GenericBtn
            buttonType={this.props.buttonType}
            fontSize={this.props.fontSize}
            onClick={this.onClick}
          >{this.props.text}</GenericBtn>
      }
      </GenericLi>
    )
  }

  private onClick = () => {
    this.setState({open: true})
  }

  private onFinished = () => {
    this.setState({open: false})
  }
}

export default asBtn(FeedbackBtn)
