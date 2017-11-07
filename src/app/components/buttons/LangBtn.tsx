import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {Lang} from 'app/data/items'
import {ListStore} from 'app/stores/listStore'

interface Props extends BaseProps {
  listStore?: ListStore
}

export function LangBtn(lang: Lang) {
  @inject('listStore')
  class AnyLangBtn extends BaseBtnComponent<Props> {
    render() {
      return <GenericBtn
        borderStyle={this.borderStyle}
        flexBasis={this.flexBasis}
        fontSize={this.fontSize}
        onClick={this.onClick}
        text={this.text}
      />
    }

    private onClick = () => {
      this.props.listStore.setLang(lang)
    }
  }

  return AnyLangBtn
}
