import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './generic'
import {ListStore} from 'app/stores/listStore'
import {getRandomCssColor} from 'app/utils'

interface Props extends BaseProps {
  listStore?: ListStore
}

@inject('listStore')
export class ColorsBtn extends BaseBtnComponent<Props> {
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
    document.body.style.backgroundColor = getRandomCssColor()
    document.body.style.color = getRandomCssColor()
  }
}
