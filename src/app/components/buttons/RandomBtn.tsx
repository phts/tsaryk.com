import {inject} from 'mobx-react'

import {GenericBtn} from './GenericBtn'
import {Mode} from 'app/stores/listStore'

@inject('listStore')
export class RandomBtn extends GenericBtn {
  onClick() {
    this.props.listStore.setMode(Mode.Random);
  }
}
