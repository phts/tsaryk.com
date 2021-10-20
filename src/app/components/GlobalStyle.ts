import {createGlobalStyle} from 'styled-components'
import {media} from 'helpers/css'
import MicrogrammaBoldFontPath from '../../static/fonts/Microgramma-Bold.otf'

export default createGlobalStyle`
  @font-face {
    font-family: Microgramma;
    src: url("${MicrogrammaBoldFontPath}");
  }

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
