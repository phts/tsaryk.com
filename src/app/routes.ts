import {ItemId} from 'stores/itemsStore'

export interface IndexPageMatch {
}

export interface ShowItemPageMatch {
  id: ItemId
}

export default {
  index: '/',
  showItem: '/:id',
}
