import React, {useEffect, useState} from 'react'

const SYMBOLS = ['\\', '|', '/', '-']
const SYMBOL_COUNT = SYMBOLS.length

const Spinner: React.FunctionComponent = () => {
  const [symbolIndex, setSymbolIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSymbolIndex((x) => (x + 1) % SYMBOL_COUNT)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return <span>{SYMBOLS[symbolIndex]}</span>
}

export default Spinner
