import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {Mode, ListStore} from 'app/stores/listStore'
import {WidthsStore} from 'app/stores/widthsStore'

interface Props extends BaseProps {
  listStore?: ListStore
  widthsStore?: WidthsStore
}

export function ModeBtn(mode: Mode) {
  @inject('listStore', 'widthsStore')
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
      if (mode !== this.props.listStore.mode) {
        this.props.widthsStore.randomize(this.props.listStore.items)
      }
      this.props.listStore.setMode(mode)
    }
  }

  return AnyModeBtn
}
