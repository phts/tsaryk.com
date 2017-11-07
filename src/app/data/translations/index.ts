import en from './en'
import ru from './ru'

export enum Lang {
  EN,
  RU,
}

export interface Translatable {
  description?: string
  name?: string
}

export type TranslatedStrings = {[index: string]: Translatable}

export const translations: {[index: number]: TranslatedStrings} = {
  [Lang.EN]: en,
  [Lang.RU]: ru,
}
