import * as React from 'react'

const INPUT_MIN_WIDTH = 20

interface Props extends React.HTMLProps<HTMLInputElement> {
  minLength?: number
  inputRef?: (input: HTMLInputElement) => void
}

export default class AutosizedTextInput extends React.Component<Props> {
  static defaultProps = {
    minLength: INPUT_MIN_WIDTH,
  }

  private input: HTMLInputElement

  componentDidMount() {
    this.adjustWidth()
  }

  render() {
    return (
      <input
        {...this.props}

        onKeyUp={this.onKeyUp}
        ref={this.inputRef}
        type="text"
      />
    )
  }

  private adjustWidth() {
    const newWidth = Math.max(this.input.value.length + 2, this.props.minLength)
    this.input.style.width = `${newWidth}ch`
  }

  private onKeyUp = () => {
    this.adjustWidth()
  }

  private inputRef = (input: HTMLInputElement) => {
    this.input = input
    if (this.props.inputRef) {
      this.props.inputRef(input)
    }
  }
}
