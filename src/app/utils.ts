export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomColorComponent(): number {
  return getRandomInt(0, 256)
}

export function getRandomCssColor(): string {
  return `rgb(${getRandomColorComponent()}, \
              ${getRandomColorComponent()}, \
              ${getRandomColorComponent()})`
}
