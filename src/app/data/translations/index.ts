import {en} from './en'
import {ru} from './ru'
import {KnownName} from '../names'

export enum Lang {
  EN = 'EN',
  RU = 'RU',
}

export interface Translatable {
  data?: {}
  description?: string
  name?: string
}

export type TranslatedStrings = {[index in KnownName]: Translatable}

export const translations: {[index in Lang]: TranslatedStrings} = {
  EN: en,
  RU: ru,
}
