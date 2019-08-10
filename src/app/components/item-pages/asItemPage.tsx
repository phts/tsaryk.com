import React from 'react'

import {Item} from 'stores/itemsStore'
import {Hoc} from 'helpers/types'

export interface ItemPageProps {
  className: string
  item: Item
  onClose: () => void
}

export type ItemPageComponentClass = React.ComponentClass<ItemPageProps>

const asItemPage: Hoc<ItemPageProps, ItemPageComponentClass> = WrappedComponent =>
  class ItemPageComponent extends React.PureComponent<ItemPageProps> {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

export default asItemPage
