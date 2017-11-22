import {observable, action} from 'mobx'

import {Lang} from 'app/data/translations'

export {Lang}

export class LangStore {
  @observable lang: Lang = Lang.EN

  @action
  setLang(lang: Lang): void {
    this.lang = lang
  }
}

export const langStore = new LangStore()
