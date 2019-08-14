import React, {useCallback, useEffect} from 'react'
import {InputElementProps} from 'helpers/types'

const INPUT_MIN_WIDTH = 20

interface Props extends InputElementProps {
  minLength?: number
  inputRef?: (input: HTMLInputElement) => void
}

const AutosizedTextInput: React.FunctionComponent<Props> = ({minLength, inputRef, ...props}) => {
  let input: HTMLInputElement

  const adjustWidth = useCallback(() => {
    const ml = minLength || INPUT_MIN_WIDTH
    const newWidth = Math.max(input.value.length + 2, ml)
    input.style.width = `${newWidth}ch`
  }, [minLength])

  const onKeyUp = useCallback(() => {
    adjustWidth()
  }, [])

  const ref = useCallback(
    (_input: HTMLInputElement) => {
      input = _input
      if (inputRef) {
        inputRef(input)
      }
    },
    [inputRef],
  )

  useEffect(() => {
    adjustWidth()
  }, [])

  return <input {...props} onKeyUp={onKeyUp} ref={ref} type="text" />
}

export default AutosizedTextInput
