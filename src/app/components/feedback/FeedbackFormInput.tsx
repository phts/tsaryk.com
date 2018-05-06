import * as React from 'react'
import styled from 'styled-components'

import AutosizedTextInput from 'app/components/AutosizedTextInput'


interface Props {
  disabled: boolean
  name: string
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>
  placeholder: string
}

export default class FeedbackFormInput extends React.Component<Props> {
  private input: HTMLInputElement

  componentDidMount() {
    this.input.value = ''
    this.input.focus()
  }

  render() {
    return (
      <StyledAutosizedTextInput
        disabled={this.props.disabled}
        inputRef={(input: HTMLInputElement) => this.input = input}
        name={this.props.name}
        onKeyDown={this.props.onKeyDown}
        placeholder={this.props.placeholder}
      />
    )
  }
}

const StyledAutosizedTextInput = styled(AutosizedTextInput)`
  border: 0 none;
  font-family: monospace;
  margin: 0;
  padding: 0;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`
