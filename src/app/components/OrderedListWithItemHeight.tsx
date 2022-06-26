import React from 'react'
import styled from 'styled-components'

function liNumberToFontSize(liCount: number, n: number) {
  return 1.2 + (liCount - n) * 0.5
}

function liCss(liCount: number) {
  const csss = []
  for (let n = 1; n <= liCount; n++) {
    csss.push(`
      li:nth-child(${n}) {
        font-size: ${liNumberToFontSize(liCount, n)}rem;
        margin: 0.4em 0;
      }
    `)
  }
  return csss
}

export default styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  ${(props) => liCss(React.Children.toArray(props.children).length)}
`
