import {createGlobalStyle} from 'styled-components'
import {media} from 'helpers/css'
import MicrogrammaBoldFontPath from '../../static/fonts/Microgramma_D_Extended_Bold.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: Microgramma D Extended Bold;
    src:
      local("Microgramma D Extended Bold"),
      url("${MicrogrammaBoldFontPath}");
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
