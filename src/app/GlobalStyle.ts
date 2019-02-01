import {createGlobalStyle} from 'app/styled-components'
import {media} from 'app/helpers/css'

export default createGlobalStyle`
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
