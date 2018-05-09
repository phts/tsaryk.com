import * as React from 'react'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import styled from 'styled-components'

import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {openIndex} from 'app/helpers/routes'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'
import {ShowItemPageMatch} from 'app/routes'
import {ItemPageComponentClass} from 'app/components/item-pages/asItemPage'
import SimpleItemPage from 'app/components/item-pages/SimpleItemPage'
import ZxSpectrumItemPage from 'app/components/item-pages/ZxSpectrumItemPage'

interface Props extends RouteComponentProps<ShowItemPageMatch> {
  className: string
  itemId: ItemId
  itemsStore?: ItemsStore
}

type KnownItemPagesMap = {
  [index in ItemId]?: ItemPageComponentClass
}

const knownItemPages: KnownItemPagesMap = {
  'ZX Spectrum': ZxSpectrumItemPage,
}

class ShowItemPage extends React.PureComponent<Props> {
  render() {
    const item = this.props.itemsStore.items[this.props.match.params.id]
    const ItemPageComponent: ItemPageComponentClass = knownItemPages[item.id] || SimpleItemPage
    return <ItemPageComponent
      item={item}
      onClose={this.onBack}
      className={this.props.className}
    />
  }

  private onBack = () => {
    openIndex(this.props.history)
  }
}

export default compose(
  withRouter,
  inject('itemsStore'),
)(styled(ShowItemPage)`
  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="http"] {
    padding-right: 12px;
    position: relative;

    &::after {
      background:
        url(https://upload.wikimedia.org/wikipedia/commons/d/d9/VisualEditor_-_Icon_-_External-link.svg)
        no-repeat;
      content: '';
      display: inline-block;
      height: 12px;
      position: absolute;
      right: 0;
      top: 0;
      width: 12px;
    }
  }

  a[href^="#/"] {
    border-bottom: ${getBorder(BUTTON_TYPE.Default)};
    text-decoration: none;
  }

  code {
    background-color: #333;
    color: white;
    padding: 0 3px;
    text-weight: bold;
  }

  img {
    max-width: 100%;
  }
`)
