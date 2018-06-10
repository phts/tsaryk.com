import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import {Mode, ListStore} from 'app/stores/listStore'
import {WidthsStore} from 'app/stores/widthsStore'

interface Props extends BtnProps {
  listStore?: ListStore
  widthsStore?: WidthsStore
}

export default function ModeBtn(mode: Mode) {
  @inject('listStore', 'widthsStore')
  class AnyModeBtn extends React.PureComponent<Props> {
    render() {
      return (
        <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
          <GenericBtn
            buttonType={this.props.buttonType}
            fontSize={this.props.fontSize}
            onClick={this.onClick}
          >{this.props.text}</GenericBtn>
        </GenericLi>
      )
    }

    private onClick = () => {
      if (mode !== this.props.listStore.mode) {
        this.props.widthsStore.randomize(this.props.listStore.list)
      }
      this.props.listStore.setMode(mode)
    }
  }

  return asBtn(AnyModeBtn)
}
