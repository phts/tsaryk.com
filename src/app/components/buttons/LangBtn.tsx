import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import {LangStore, Lang} from 'app/stores/langStore'

interface Props extends BtnProps {
  langStore?: LangStore
}

export default function LangBtn(lang: Lang) {
  @inject('langStore')
  class AnyLangBtn extends React.PureComponent<Props> {
    render() {
      return (
        <GenericLi flexBasis={this.props.flexBasis}>
          <GenericBtn
            buttonType={this.props.buttonType}
            fontSize={this.props.fontSize}
            onClick={this.onClick}
            text={this.props.text}
          />
        </GenericLi>
      )
    }

    private onClick = () => {
      this.props.langStore.setLang(lang)
    }
  }

  return asBtn(AnyLangBtn)
}
