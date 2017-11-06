import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {Mode, ListStore} from 'app/stores/listStore'

interface Props extends BaseProps {
  listStore?: ListStore
}

export function ModeBtn(mode: Mode) {
  @inject('listStore')
  class AnyModeBtn extends BaseBtnComponent<Props> {
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
      this.props.listStore.setMode(mode)
    }
  }

  return AnyModeBtn
}
