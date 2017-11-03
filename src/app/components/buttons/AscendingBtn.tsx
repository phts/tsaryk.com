import {inject} from 'mobx-react'

import {GenericBtn} from './GenericBtn'
import {Mode} from 'app/stores/listStore'

@inject('listStore')
export class AscendingBtn extends GenericBtn {
  onClick() {
    this.props.listStore.setMode(Mode.Asc)
  }
}
