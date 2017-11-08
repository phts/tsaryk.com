import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {OpenItemStore} from 'app/stores/openItemStore'

interface Props extends BaseProps {
  openItemStore?: OpenItemStore
}

@inject('openItemStore')
@observer
export class TextBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      borderStyle={this.textBtnBorderStyle}
      description={this.description}
      flexBasis={this.textBtnFlexBasis}
      fontSize={this.fontSize}
      onClick={this.onClick}
      text={this.text}
    />
  }

  private onClick = () => {
    this.props.openItemStore.toggle(this.props.item.id)
  }

  private isOpen() {
    return this.props.openItemStore.isOpen(this.props.item.id)
  }

  private get description() {
    if (!this.isOpen()) {
      return null
    }
    return this.props.item.description
  }

  private get textBtnBorderStyle() {
    if (!this.props.item.description) {
      // DEBUG: To improve visibility of missing description.
      // To be removed.
      return '0 none'
    }
    if (this.isOpen()) {
      return '0 none'
    }
    return this.borderStyle
  }

  private get textBtnFlexBasis() {
    if (this.isOpen()) {
      return '100%'
    }
    return this.flexBasis
  }
}
