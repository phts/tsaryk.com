import * as React from 'react'
import {observer, inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {OpenItemStore} from 'app/stores/openItemStore'
import {BUTTON_TYPE} from 'app/components'

interface Props extends BaseProps {
  openItemStore?: OpenItemStore
}

@inject('openItemStore')
@observer
export class TextBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      buttonType={this.textBtnButtonType}
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

  private get textBtnButtonType() {
    if (!this.props.item.description) {
      // DEBUG: To improve visibility of missing description.
      // To be removed.
      return BUTTON_TYPE.Simple
    }
    if (this.isOpen()) {
      return BUTTON_TYPE.Simple
    }
    return this.buttonType
  }

  private get textBtnFlexBasis() {
    if (this.isOpen()) {
      return '100%'
    }
    return this.flexBasis
  }
}
