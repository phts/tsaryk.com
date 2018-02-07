import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {BUTTON_TYPE} from 'app/helpers/buttons'
import {openItem} from 'app/helpers/routes'

type Props = BaseProps & RouteComponentProps<{}>

class TextBtnRaw extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      buttonType={this.textBtnButtonType}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      onClick={this.onClick}
      text={this.text}
    />
  }

  private onClick = () => {
    openItem(this.props.history, this.props.item.id)
  }

  private get textBtnButtonType() {
    if (!this.props.item.description) {
      // DEBUG: To improve visibility of missing description.
      // To be removed.
      return BUTTON_TYPE.Simple
    }
    return this.buttonType
  }
}

export const TextBtn = withRouter<Props>(TextBtnRaw)
