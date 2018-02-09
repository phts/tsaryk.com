import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseBtnComponent, BaseProps} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {getRandomCssColor} from 'app/helpers/css'
import {UiStore} from 'app/stores/uiStore'

interface Props extends BaseProps {
  uiStore?: UiStore
}

@inject('uiStore')
export class ColorsBtn extends BaseBtnComponent<Props> {
  render() {
    return <GenericBtn
      buttonType={this.buttonType}
      flexBasis={this.flexBasis}
      fontSize={this.fontSize}
      onClick={this.onClick}
      text={this.text}
    />
  }

  private onClick = () => {
    this.props.uiStore.backgroundColor = getRandomCssColor()
    this.props.uiStore.fontColor = getRandomCssColor()
  }
}
