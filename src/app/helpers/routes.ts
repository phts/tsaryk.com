import {History} from 'history'
import {ItemId} from 'app/stores/itemsStore'

export function openItem(history: History, id: ItemId) {
  history.push(id)
}

export function openIndex(history: History) {
  history.push('')
}
