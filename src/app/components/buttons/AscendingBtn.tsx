import {GenericBtn} from './GenericBtn'
import {Mode} from '../BtnList'

export class AscendingBtn extends GenericBtn {
  onClick() {
    this.props.onModeChange(Mode.Asc);
  }
}
