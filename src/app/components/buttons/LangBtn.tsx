import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import {LangStore, Lang} from 'stores/langStore'

interface Props extends BtnProps {
  langStore?: LangStore
}

export default function LangBtn(lang: Lang) {
  @inject('langStore')
  class AnyLangBtn extends React.PureComponent<Props> {
    render() {
      return (
        <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
          <GenericBtn
            buttonType={this.props.buttonType}
            fontSize={this.props.fontSize}
            onClick={this.onClick}
            title={this.props.tooltip}
          >{this.props.text}</GenericBtn>
        </GenericLi>
      )
    }

    private onClick = () => {
      this.props.langStore.setLang(lang)
    }
  }

  return asBtn(AnyLangBtn)
}
