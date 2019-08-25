import React, {useCallback, useEffect, useRef, useState} from 'react'

import emailService from 'services/email'
import ActionForm from './ActionForm'
import FeedbackFormInput from './FeedbackFormInput'
import Indicator, {IndicatorState} from './Indicator'
import FeedbackFormSubmit from './FeedbackFormSubmit'

interface Props {
  onFinished: () => void
  placeholder: string
}

const DELAY_BEFORE_FINISHED = 3000

const FeedbackForm: React.FunctionComponent<Props> = ({placeholder, onFinished}) => {
  const input = useRef<HTMLInputElement>(null)
  let finishTimeout: number

  const [indicatorState, setIndicatorState] = useState<IndicatorState | null>(null)

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 27) {
        event.preventDefault()
        onFinished()
      }
    },
    [onFinished]
  )

  const finish = useCallback(
    (result: IndicatorState) => {
      setIndicatorState(result)
      finishTimeout = window.setTimeout(() => {
        setIndicatorState(null)
        onFinished()
      }, DELAY_BEFORE_FINISHED)
    },
    [onFinished]
  )

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const text = (event.target as HTMLFormElement).text.value
    if (!text) {
      return
    }

    setIndicatorState(IndicatorState.Processing)

    emailService
      .send(text)
      .then(() => {
        finish(IndicatorState.Success)
      })
      .catch(() => {
        finish(IndicatorState.Failed)
      })
  }, [])

  useEffect(() => {
    input.current!.value = ''
    input.current!.focus()

    return () => clearTimeout(finishTimeout)
  }, [])

  const processing = indicatorState !== null
  return (
    <ActionForm onSubmit={onSubmit} disabled={processing} noValidate>
      <FeedbackFormInput
        autoComplete="off"
        disabled={processing}
        inputRef={input}
        name="text"
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      {processing ? <Indicator state={indicatorState!} /> : <FeedbackFormSubmit />}
    </ActionForm>
  )
}

export default FeedbackForm
