import {random} from 'rambdax'

export function getRandomColorComponent(): number {
  return random(0, 255)
}

export function getRandomCssColor(): string {
  return `rgb(${getRandomColorComponent()}, \
              ${getRandomColorComponent()}, \
              ${getRandomColorComponent()})`
}
