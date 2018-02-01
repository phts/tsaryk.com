import {css, SimpleInterpolation} from 'styled-components'

const breakpoints = {
  mobile: 320,
  smartphone: 480,
  tablet: 720,
  desktop: 1020,
}

type BreakpointsLabel = keyof typeof breakpoints
type Medias = {[index in keyof typeof breakpoints]?: typeof css}

export const media = Object.keys(breakpoints).reduce((acc: Medias, val: BreakpointsLabel) => {
  acc[val] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (max-width: ${breakpoints[val] / 16}em) {
      ${css(strings, ...interpolations)};
    }
  `
  return acc
}, {}) as Medias
