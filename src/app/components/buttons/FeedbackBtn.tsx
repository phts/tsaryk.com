import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import FeedbackForm from 'app/components/feedback/FeedbackForm'
import {I18nStore} from 'app/stores/i18nStore'

interface Props extends BtnProps {
  i18nStore?: I18nStore
}

interface State {
  open: boolean
}

@inject('i18nStore')
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
            placeholder={this.props.i18nStore.labels.sayHello}
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
