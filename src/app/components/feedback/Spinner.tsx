import * as React from 'react'

const SYMBOLS = ['\\', '|', '/', '-']
const SYMBOL_COUNT = SYMBOLS.length

interface State {
  symbolIndex: number
}

export default class Spinner extends React.PureComponent<{}, State> {
  private interval: number

  constructor(props: {}) {
    super(props)
    this.state = {
      symbolIndex: 0,
    }
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState(state => ({symbolIndex: (state.symbolIndex + 1) % SYMBOL_COUNT}))
    }, 100)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const symbol = SYMBOLS[this.state.symbolIndex]
    return (
      <span>{symbol}</span>
    )
  }
}
