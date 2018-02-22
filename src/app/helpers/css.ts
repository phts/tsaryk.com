import {random} from 'rambdax'
import {css, SimpleInterpolation} from 'styled-components'

const breakpoints = {
  mobile: 320,
  smartphone: 480,
  tablet: 720,
  desktop: 1020,
}

type BreakpointsLabel = keyof typeof breakpoints
type MediaSet = {[index in keyof typeof breakpoints]?: typeof css}
type Medias = {
  min: MediaSet,
  max: MediaSet,
}

export const media = Object.keys(breakpoints).reduce((acc: Medias, val: BreakpointsLabel) => {
  acc.min = acc.min || {}
  acc.min[val] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${breakpoints[val] / 16}em) {
      ${css(strings, ...interpolations)};
    }
  `
  acc.max = acc.max || {}
  acc.max[val] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
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
