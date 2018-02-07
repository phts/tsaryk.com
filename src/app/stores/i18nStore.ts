import {computed} from 'mobx'

import {
  Lang,
  LangStore,
  langStore,
} from './langStore'

enum KnownLabels {
  close,
  days,
  hours,
  min,
  months,
  sec,
  years,
}

type TranslatedLabelsMap = {[lk in keyof typeof KnownLabels]: string}
type LabelsMap = {[lng in Lang]: TranslatedLabelsMap}

const labelsMap: LabelsMap = {
  EN: {
    close: 'Сlose',
    days: 'days',
    hours: 'hours',
    min: 'min',
    months: 'months',
    sec: 'sec',
    years: 'years',
  },
  RU: {
    close: 'Закрыть',
    days: 'дн.',
    hours: 'ч.',
    min: 'мин.',
    months: 'мес.',
    sec: 'сек.',
    years: 'лет',
  },
}

export class I18nStore {
  constructor(private lang: LangStore) {}

  @computed
  get labels() {
    return labelsMap[this.lang.lang]
  }
}

export const i18nStore = new I18nStore(langStore)
