import * as styledComponents from 'styled-components'
import {
  ThemedStyledComponentsModule,
  SimpleInterpolation,
  StyledFunction,
} from 'styled-components'

import Theme from 'app/themes/Theme'

const {
  css,
  default: styled,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>

export {
  css,
  injectGlobal,
  keyframes,
  SimpleInterpolation,
  StyledFunction,
  ThemeProvider,
}
export default styled
