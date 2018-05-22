import * as React from 'react'
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import styled from 'styled-components'

import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {openIndex} from 'app/helpers/routes'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'
import routes, {ShowItemPageMatch} from 'app/routes'
import {ItemPageComponentClass} from 'app/components/item-pages/asItemPage'
import SimpleItemPage from 'app/components/item-pages/SimpleItemPage'
import ZxSpectrumItemPage from 'app/components/item-pages/ZxSpectrumItemPage'
import scrollToTopOnMount from 'app/components/scrollToTopOnMount'

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
    if (!item) {
      return <Redirect to={routes.index}/>
    }
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
  scrollToTopOnMount,
  inject('itemsStore'),
)(styled(ShowItemPage)`
  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"],
  a[href^="http"] {
    padding-right: 12px;
    position: relative;
    background:
      url(https://upload.wikimedia.org/wikipedia/commons/d/d9/VisualEditor_-_Icon_-_External-link.svg)
      no-repeat
      100% 0;
  }

  a[href^="callto"],
  a[href^="mailto"],
  a[href^="tel"] {
    white-space: nowrap;
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
