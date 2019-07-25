/* eslint-disable no-duplicate-imports*/

import Theme from 'themes/Theme'
import * as styledComponents from '../../node_modules/styled-components'
import {
  ThemedStyledComponentsModule,
  SimpleInterpolation,
  StyledFunction,
} from '../../node_modules/styled-components'

const {
  css,
  default: styled,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>

export {css, injectGlobal, keyframes, SimpleInterpolation, StyledFunction, ThemeProvider}
export default styled
