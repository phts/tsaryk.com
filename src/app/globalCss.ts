import {injectGlobal} from 'styled-components'
import {media} from 'app/helpers/css'

// tslint:disable-next-line no-unused-expression
injectGlobal`
  html {
    ${media.max.tablet`
      font-size: 90%;
    `}
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    flex: 0 1 auto;
  }
`
