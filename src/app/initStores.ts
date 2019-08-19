import stores from 'stores'

export default function initStores() {
  stores.widthsStore.randomize(stores.listStore.list)
}
