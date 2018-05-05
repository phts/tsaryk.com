import * as React from 'react'

import emailService from 'app/services/email'
import ActionForm from './ActionForm'
import FeedbackFormInput, {KeyDownEvent} from './FeedbackFormInput'
import Indicator, {IndicatorState} from './Indicator'
import EnterSymbol from './EnterSymbol'

interface Props {
  onFinished: () => void
  placeholder: string
}

interface State {
  indicatorState: IndicatorState | null
}

interface SubmitEvent {
  target: EventTarget
  preventDefault: () => void
}

const DELAY_BEFORE_FINISHED = 3000

export default class FeedbackForm extends React.PureComponent<Props, State> {
  private finishTimeout: number

  constructor(props: Props) {
    super(props)
    this.state = {
      indicatorState: null,
    }
  }

  componentWillUnmount() {
    clearTimeout(this.finishTimeout)
  }

  render() {
    const processing = this.state.indicatorState !== null
    return (
      <ActionForm onSubmit={this.onSubmit} disabled={processing}>
        <FeedbackFormInput
          disabled={processing}
          name="text"
          onKeyDown={this.onKeyDown}
          placeholder={this.props.placeholder}
        />
        {
          processing ?
            <Indicator state={this.state.indicatorState}/> :
            <EnterSymbol/>
        }
      </ActionForm>
    )
  }

  private onSubmit = (event: SubmitEvent) => {
    event.preventDefault()

    const text = (event.target as HTMLFormElement).text.value
    if (!text) {
      return
    }

    this.setState({indicatorState: IndicatorState.Processing})

    emailService.send(text).then(() => {
      this.finish(IndicatorState.Success)
    }).catch(() => {
      this.finish(IndicatorState.Failed)
    })
  }

  private onKeyDown = (event: KeyDownEvent) => {
    if (event.keyCode === 27) {
      event.preventDefault()
      this.props.onFinished()
      return
    }
  }

  private finish(result: IndicatorState) {
    this.setState({indicatorState: result})
    this.finishTimeout = window.setTimeout(() => {
      this.setState({indicatorState: null})
      this.props.onFinished()
    }, DELAY_BEFORE_FINISHED)
  }
}
