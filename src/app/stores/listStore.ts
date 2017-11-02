import {observable, action} from 'mobx';

export enum Mode {
  Asc,
  Random,
}

export class ListStore {
  @observable mode: Mode = Mode.Asc

  @action
  setMode(mode: Mode): void {
    this.mode = mode
  }
}

export const listStore = new ListStore()
