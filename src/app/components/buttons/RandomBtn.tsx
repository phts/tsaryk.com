import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {Mode, ListStore} from 'app/stores/listStore'

interface Props extends BaseProps {
  listStore?: ListStore
}

@inject('listStore')
export class RandomBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      category={this.props.category}
      size={this.props.size}
      text={this.props.text}
      width={this.props.width}
      onClick={this.onClick}
    />
  }

  private onClick = () => {
    this.props.listStore.setMode(Mode.Random)
  }
}
