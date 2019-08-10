import React from 'react'
import {inject} from 'mobx-react'

import {getRandomCssColor} from 'helpers/css'
import {UiStore} from 'stores/uiStore'
import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'

interface Props extends BtnProps {
  uiStore?: UiStore
}

@inject('uiStore')
class ColorsBtn extends React.PureComponent<Props> {
  render() {
    return (
      <GenericLi flexBasis={this.props.flexBasis} flexible={this.props.flexible}>
        <GenericBtn
          buttonType={this.props.buttonType}
          fontSize={this.props.fontSize}
          onClick={this.onClick}
        >
          {this.props.text}
        </GenericBtn>
      </GenericLi>
    )
  }

  private onClick = () => {
    this.props.uiStore.backgroundColor = getRandomCssColor()
    this.props.uiStore.color = getRandomCssColor()
  }
}

export default asBtn(ColorsBtn)
