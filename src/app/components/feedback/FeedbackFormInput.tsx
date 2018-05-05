import * as React from 'react'
import styled from 'styled-components'


const INPUT_MIN_WIDTH = 20

interface Props {
  disabled: boolean
  name: string
  onKeyDown: (event: KeyDownEvent) => void
  placeholder: string
}

export interface KeyDownEvent {
  keyCode: number
  preventDefault: () => void
}

export default class FeedbackFormInput extends React.Component<Props> {
  private input: HTMLInputElement

  componentDidMount() {
    this.reset()
    this.input.focus()
  }

  render() {
    return (
      <Input
        disabled={this.props.disabled}
        innerRef={(input: HTMLInputElement) => this.input = input}
        name={this.props.name}
        onKeyUp={this.onKeyUp}
        placeholder={this.props.placeholder}
      />
    )
  }

  private reset() {
    this.input.value = ''
    this.adjustWidth()
  }

  private adjustWidth() {
    const newWidth = Math.max(this.input.value.length + 2, INPUT_MIN_WIDTH)
    this.input.style.width = `${newWidth}ch`
  }

  private onKeyUp = () => {
    this.adjustWidth()
  }
}

const Input = styled.input.attrs({
  type: 'text',
})`
  border: 0 none;
  font-family: monospace;
  margin: 0;
  padding: 0;

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`
