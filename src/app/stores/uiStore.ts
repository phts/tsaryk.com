import {observable} from 'mobx'

export class UiStore {
  @observable backgroundColor: string
  @observable fontColor: string
}

export default new UiStore()
