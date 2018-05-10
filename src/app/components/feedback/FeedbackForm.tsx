import * as React from 'react'

import emailService from 'app/services/email'
import ActionForm from './ActionForm'
import FeedbackFormInput from './FeedbackFormInput'
import Indicator, {IndicatorState} from './Indicator'
import EnterSymbol from './EnterSymbol'

interface Props {
  onFinished: () => void
  placeholder: string
}

interface State {
  indicatorState: IndicatorState | null
}

const DELAY_BEFORE_FINISHED = 3000

export default class FeedbackForm extends React.PureComponent<Props, State> {
  private input: HTMLInputElement
  private finishTimeout: number

  constructor(props: Props) {
    super(props)
    this.state = {
      indicatorState: null,
    }
  }

  componentDidMount() {
    this.input.value = ''
    this.input.focus()
  }

  componentWillUnmount() {
    clearTimeout(this.finishTimeout)
  }

  render() {
    const processing = this.state.indicatorState !== null
    return (
      <ActionForm onSubmit={this.onSubmit} disabled={processing} noValidate>
        <FeedbackFormInput
          autoComplete="off"
          disabled={processing}
          inputRef={input => this.input = input}
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

  private onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  private onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
