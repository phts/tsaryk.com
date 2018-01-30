import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {LangStore, Lang} from 'app/stores/langStore'

interface Props extends BaseProps {
  langStore?: LangStore
}

export function LangBtn(lang: Lang) {
  @inject('langStore')
  class AnyLangBtn extends BaseBtnComponent<Props> {
    render() {
      return <GenericBtn
        buttonType={this.buttonType}
        flexBasis={this.flexBasis}
        fontSize={this.fontSize}
        onClick={this.onClick}
        text={this.text}
      />
    }

    private onClick = () => {
      this.props.langStore.setLang(lang)
    }
  }

  return AnyLangBtn
}
