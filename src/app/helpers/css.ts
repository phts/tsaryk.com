import random from 'rambdax/modules/random'
import {css, SimpleInterpolation} from 'app/styled-components'

export const breakpoints = {
  mobile: 320,
  smartphone: 480,
  tablet: 720,
  desktop: 1020,
  hd: 1440,
}

type BreakpointsLabel = keyof typeof breakpoints
type MediaSet = {[index in keyof typeof breakpoints]?: typeof css}
interface Medias {
  min: MediaSet
  max: MediaSet
}

export const media = Object.keys(breakpoints).reduce((acc: Medias, val: BreakpointsLabel) => {
  acc.min = acc.min || {}
  acc.min[val] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (min-width: ${breakpoints[val]}px) {
      ${css(strings, ...interpolations)};
    }
  `
  acc.max = acc.max || {}
  acc.max[val] = (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
    @media (max-width: ${breakpoints[val]}px) {
      ${css(strings, ...interpolations)};
    }
  `
  return acc
}, {}) as Medias

export function getRandomColorComponent(): number {
  return random(0, 255)
}

export function getRandomCssColor(): string {
  const r = getRandomColorComponent()
  const g = getRandomColorComponent()
  const b = getRandomColorComponent()
  return `rgb(${r}, ${g}, ${b})`
}

export const blinkAnimation = css`
  animation: blink 1s linear infinite;
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`
