import {ItemId} from 'app/stores/itemsStore'

export const routes = {
  indexPage: '/',
  showItemPage: '/:id',
}

export type IndexPageMatch = {
}

export type ShowItemPageMatch = {
  id: ItemId,
}
