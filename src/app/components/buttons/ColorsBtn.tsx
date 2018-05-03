import * as React from 'react'
import {inject} from 'mobx-react'

import asBtn, {BtnProps} from './asBtn'
import GenericBtn from './generic/GenericBtn'
import GenericLi from './generic/GenericLi'
import {getRandomCssColor} from 'app/helpers/css'
import {UiStore} from 'app/stores/uiStore'

interface Props extends BtnProps {
  uiStore?: UiStore
}

@inject('uiStore')
class ColorsBtn extends React.PureComponent<Props> {
  render() {
    return (
      <GenericLi flexBasis={this.props.flexBasis}>
        <GenericBtn
          buttonType={this.props.buttonType}
          fontSize={this.props.fontSize}
          onClick={this.onClick}
          text={this.props.text}
        />
      </GenericLi>
    )
  }

  private onClick = () => {
    this.props.uiStore.backgroundColor = getRandomCssColor()
    this.props.uiStore.fontColor = getRandomCssColor()
  }
}

export default asBtn(ColorsBtn)
