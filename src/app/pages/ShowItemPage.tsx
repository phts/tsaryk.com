/* eslint-disable max-len */
import * as React from 'react'
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import styled from 'styled-components'

import {media} from 'app/helpers/css'
import {ItemId, ItemsStore} from 'app/stores/itemsStore'
import {openIndex} from 'app/helpers/routes'
import {BUTTON_TYPE, getBorder} from 'app/helpers/buttons'
import routes, {ShowItemPageMatch} from 'app/routes'
import {ItemPageComponentClass} from 'app/components/item-pages/asItemPage'
import SimpleItemPage from 'app/components/item-pages/SimpleItemPage'
import CatsPage from 'app/components/item-pages/CatsPage'
import Heroes3Page from 'app/components/item-pages/Heroes3Page'
import UltramarinedPage from 'app/components/item-pages/UltramarinedPage'
import PlayingCardsPage from 'app/components/item-pages/PlayingCardsPage'
import ZxSpectrumPage from 'app/components/item-pages/ZxSpectrumPage'
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
  Cats: CatsPage,
  'Heroes of Might and Magic 3': Heroes3Page,
  'Playing cards': PlayingCardsPage,
  Ultramarined: UltramarinedPage,
  'ZX Spectrum': ZxSpectrumPage,
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
  a {
    color: inherit;
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

  figure {
    margin: 1rem auto;
    max-width: 1200px;
  }

  figcaption {
    text-align: center;
  }

  picture img {
    width: 100%;
  }

  iframe.youtube {
    max-width: 720px;
    max-height: 410px;
    height: calc((100vw - 20rem) * 0.57);
    width: calc(100vw - 20rem);

    ${media.max.tablet`
      height: calc((100vw - 14rem)  * 0.57);
      width: calc(100vw - 14rem);
    `}
    ${media.max.smartphone`
      height: calc((100vw - 4rem)  * 0.57);
      width: calc(100vw - 4rem);
    `}
    ${media.max.mobile`
      height: calc((100vw - 2rem)  * 0.57);
      width: calc(100vw - 2rem);
    `}
  }
`)
