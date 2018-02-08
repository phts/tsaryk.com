import * as React from 'react'
import {render} from 'react-dom'
import {injectGlobal} from 'styled-components'

import {App} from 'app'

// tslint:disable-next-line no-unused-expression
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

render(
  <App/>,
  document.getElementById('app'),
)
