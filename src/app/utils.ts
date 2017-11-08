import {random} from 'rambdax'
import * as R from 'ramda'

export function getRandomColorComponent(): number {
  return random(0, 255)
}

export function getRandomCssColor(): string {
  return `rgb(${getRandomColorComponent()}, \
              ${getRandomColorComponent()}, \
              ${getRandomColorComponent()})`
}

type EnumClass = {[index: number]: string} | {[index: string]: number}

export function enumToArray<T>(en: EnumClass): Array<keyof T> {
  return R.pipe(
    R.reject(x => typeof x === 'number'),
    R.values,
  )(en) as Array<keyof T>
}
