import * as React from 'react'
import {inject} from 'mobx-react'

import {BaseProps, BaseBtnComponent} from './BaseBtnComponent'
import {GenericBtn} from './GenericBtn'
import {ListStore} from 'app/stores/listStore'
import {getRandomCssColor} from 'app/utils'

interface Props extends BaseProps {
  listStore?: ListStore
}

@inject('listStore')
export class ColorsBtn extends BaseBtnComponent<Props> {
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
    document.body.style.backgroundColor = getRandomCssColor()
    document.body.style.color = getRandomCssColor()
  }
}
