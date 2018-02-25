import * as React from 'react'

import {Item} from 'app/stores/itemsStore'

export interface ItemPageProps {
  item: Item
  onClose: () => void
}

export type ItemPageComponentClass = React.ComponentClass<ItemPageProps>

type WrappedComponentType = React.ComponentClass<ItemPageProps> | React.StatelessComponent<ItemPageProps>

type AsItemPageHoc = (WrappedComponent: WrappedComponentType) => ItemPageComponentClass

const asItemPage: AsItemPageHoc = WrappedComponent =>
  class ItemPageComponent extends React.PureComponent<ItemPageProps> {
    render() {
      return <WrappedComponent
        {...this.props}
      />
    }
  }

export default asItemPage
