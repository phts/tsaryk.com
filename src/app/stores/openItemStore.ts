import {observable, action} from 'mobx'

import {ItemId} from './itemsStore'

export class OpenItemStore {
  @observable openItemId: ItemId = null

  @action
  toggle(itemId: ItemId): void {
    if (this.isOpen(itemId)) {
      this.closeAll()
    } else {
      this.open(itemId)
    }
  }

  @action
  closeAll(): void {
    this.openItemId = null
  }

  open(itemId: ItemId): void {
    this.openItemId = itemId
  }

  isOpen(itemId: ItemId): boolean {
    return this.openItemId === itemId
  }
}

export const openItemStore = new OpenItemStore()
