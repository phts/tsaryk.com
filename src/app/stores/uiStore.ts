import {observable} from 'mobx'

export class UiStore {
  @observable backgroundColor = 'white'
  @observable color = 'black'
}

export default new UiStore()
