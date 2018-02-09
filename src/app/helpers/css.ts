import {random} from 'rambdax'
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

export function getRandomColorComponent(): number {
  return random(0, 255)
}

export function getRandomCssColor(): string {
  return `rgb(${getRandomColorComponent()}, \
              ${getRandomColorComponent()}, \
              ${getRandomColorComponent()})`
}
