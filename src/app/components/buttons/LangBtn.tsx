import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import {LangStore, Lang} from 'app/stores/langStore'

interface Props extends BtnProps {
  langStore?: LangStore
}

export default function LangBtn(lang: Lang) {
  @inject('langStore')
  class AnyLangBtn extends React.PureComponent<Props> {
    render() {
      return <GenericBtn
        buttonType={this.props.buttonType}
        flexBasis={this.props.flexBasis}
        fontSize={this.props.fontSize}
        onClick={this.onClick}
        text={this.props.text}
      />
    }

    private onClick = () => {
      this.props.langStore.setLang(lang)
    }
  }

  return asBtn(AnyLangBtn)
}
