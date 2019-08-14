import {Item} from 'stores/itemsStore'

export interface ItemPageProps {
  className: string
  item: Item
  onClose: () => void
}

export type ItemPageComponentClass = React.FunctionComponent<ItemPageProps>
