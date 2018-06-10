import {computed} from 'mobx'

import langStore, {Lang, LangStore} from './langStore'

enum KnownLabels {
  close,
}

type TranslatedLabelsMap = {[lk in keyof typeof KnownLabels]: string}
type LabelsMap = {[lng in Lang]: TranslatedLabelsMap}

const labelsMap: LabelsMap = {
  EN: {
    close: 'Сlose',
  },
  RU: {
    close: 'Закрыть',
  },
}

export class I18nStore {
  constructor(private lang: LangStore) {}

  @computed
  get labels() {
    return labelsMap[this.lang.lang]
  }
}

export default new I18nStore(langStore)
