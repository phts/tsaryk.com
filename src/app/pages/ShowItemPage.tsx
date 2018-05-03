import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {inject} from 'mobx-react'

import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {openIndex} from 'app/helpers/routes'
import {ShowItemPageMatch} from 'app/routes'
import {ItemPageComponentClass} from 'app/components/item-pages/asItemPage'
import SimpleItemPage from 'app/components/item-pages/SimpleItemPage'
import ZxSpectrumItemPage from 'app/components/item-pages/ZxSpectrumItemPage'

interface Props extends RouteComponentProps<ShowItemPageMatch> {
  itemId: ItemId
  itemsStore?: ItemsStore
}

type KnownItemPagesMap = {
  [index in ItemId]?: ItemPageComponentClass
}

const knownItemPages: KnownItemPagesMap = {
  'ZX Spectrum': ZxSpectrumItemPage,
}

@inject('itemsStore')
class ShowItemPage extends React.PureComponent<Props> {
  render() {
    const item = this.props.itemsStore.items[this.props.match.params.id]
    const ItemPageComponent: ItemPageComponentClass = knownItemPages[item.id] || SimpleItemPage
    return <ItemPageComponent
      item={item}
      onClose={this.onBack}
    />
  }

  private onBack = () => {
    openIndex(this.props.history)
  }
}

export default withRouter<Props>(ShowItemPage)
