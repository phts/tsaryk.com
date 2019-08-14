import React from 'react'

import {Item} from 'stores/itemsStore'
import {Hoc} from 'helpers/types'

export interface ItemPageProps {
  className: string
  item: Item
  onClose: () => void
}

export type ItemPageComponentClass = React.FunctionComponent<ItemPageProps>

const asItemPage: Hoc<ItemPageProps, ItemPageComponentClass> = WrappedComponent => props => (
  <WrappedComponent {...props} />
)

export default asItemPage
