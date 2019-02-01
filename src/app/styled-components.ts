import * as styledComponents from 'styled-components'
import {SimpleInterpolation} from 'styled-components'

import Theme from 'app/themes/Theme'

const {
  createGlobalStyle,
  css,
  default: styled,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export {
  createGlobalStyle,
  css,
  keyframes,
  SimpleInterpolation,
  ThemeProvider,
}
export default styled
