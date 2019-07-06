import {KnownName} from '../names'
import {en} from './en'
import {ru} from './ru'

export enum Lang {
  EN = 'EN',
  RU = 'RU',
}

export interface Translatable {
  data?: {}
  description?: string
  name?: string
  tooltip?: string
}

export type TranslatedStrings = {[index in KnownName]: Translatable}

export const translations: {[index in Lang]: TranslatedStrings} = {
  EN: en,
  RU: ru,
}
