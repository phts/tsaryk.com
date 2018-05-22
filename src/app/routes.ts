import {ItemId} from 'app/stores/itemsStore'

export type IndexPageMatch = {
}

export type ShowItemPageMatch = {
  id: ItemId,
}

export default {
  index: '/',
  showItem: '/:id',
}
