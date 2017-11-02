import {GenericBtn} from './GenericBtn'
import {Mode} from '../BtnList'

export class RandomBtn extends GenericBtn {
  onClick() {
    this.props.onModeChange(Mode.Random);
  }
}
