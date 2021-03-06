import {History} from 'history'
import {ItemId} from 'stores/itemsStore'
import routes from 'routes'

export function openItem(history: History, id: ItemId) {
  history.push(id)
}

export function openIndex(history: History) {
  history.push(routes.index)
}
