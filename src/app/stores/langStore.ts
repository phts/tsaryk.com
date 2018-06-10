import {observable, action} from 'mobx'
import browserLocale from 'browser-locale'

import {Lang} from 'app/data/translations'

export {Lang}

function getBrowserLang() {
  if (/^ru(-.*)?$/.test(browserLocale())) {
    return Lang.RU
  }

  return Lang.EN
}

export class LangStore {
  @observable lang: Lang

  constructor(initialLang: Lang = Lang.EN) {
    this.lang = initialLang
  }

  @action
  setLang(lang: Lang): void {
    this.lang = lang
  }
}

export default new LangStore(getBrowserLang())
