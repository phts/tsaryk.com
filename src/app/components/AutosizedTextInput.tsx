import React, {useCallback, useEffect, useRef} from 'react'
import {InputElementProps} from 'helpers/types'

const INPUT_MIN_WIDTH = 20

interface Props extends InputElementProps {
  minLength?: number
  inputRef?: React.RefObject<HTMLInputElement>
}

const AutosizedTextInput: React.FunctionComponent<Props> = ({minLength, inputRef, ...props}) => {
  inputRef = inputRef || useRef<HTMLInputElement>(null)

  const adjustWidth = useCallback(() => {
    const ml = minLength || INPUT_MIN_WIDTH
    const newWidth = Math.max(inputRef!.current!.value.length + 2, ml)
    inputRef!.current!.style.width = `${newWidth}ch`
  }, [minLength])

  const onKeyUp = useCallback(() => {
    adjustWidth()
  }, [])

  useEffect(() => {
    adjustWidth()
  }, [])

  return <input {...props} onKeyUp={onKeyUp} ref={inputRef} type="text" />
}

export default AutosizedTextInput
