/* eslint-disable no-duplicate-imports*/

import * as styledComponents from '../../node_modules/styled-components'
import {
  ThemedStyledComponentsModule,
  SimpleInterpolation,
  StyledFunction,
} from '../../node_modules/styled-components'

import Theme from 'themes/Theme'

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
