import * as R from 'ramda'

type EnumClass = {[index: number]: string} | {[index: string]: number}

export function enumToArray<T>(en: EnumClass): Array<keyof T> {
  return R.pipe(
    R.reject(x => typeof x === 'number'),
    R.values,
  )(en) as Array<keyof T>
}
