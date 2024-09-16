import {computed} from 'mobx'

import langStore, {Lang, LangStore} from './langStore'

enum KnownLabels {
  close,
}

type TranslatedLabelsMap = {[lk in keyof typeof KnownLabels]: string}
type LabelsMap = {[lng in Lang]: TranslatedLabelsMap}

const labelsMap: LabelsMap = {
  EN: {
    close: 'Close',
  },
  RU: {
    close: 'Закрыть',
  },
}

export class I18nStore {
  // eslint-disable-next-line no-useless-constructor
  constructor(private lang: LangStore) {}

  @computed
  get labels() {
    return labelsMap[this.lang.lang]
  }
}

export default new I18nStore(langStore)
