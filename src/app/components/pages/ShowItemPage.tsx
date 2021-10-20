import React, {useCallback} from 'react'
import {withRouter, RouteComponentProps, Redirect} from 'react-router-dom'
import styled from 'styled-components'

import {media} from 'helpers/css'
import {ItemId} from 'stores/itemsStore'
import {openIndex} from 'helpers/routes'
import {BUTTON_TYPE, getBorder} from 'helpers/buttons'
import routes, {ShowItemPageMatch} from 'routes'
import {ItemPageComponentClass} from 'components/item-pages/types'
import SimpleItemPage from 'components/item-pages/SimpleItemPage'
import CatsPage from 'components/item-pages/CatsPage'
import Heroes3Page from 'components/item-pages/Heroes3Page'
import UltramarinedPage from 'components/item-pages/UltramarinedPage'
import PlayingCardsPage from 'components/item-pages/PlayingCardsPage'
import ZxSpectrumPage from 'components/item-pages/ZxSpectrumPage'
import PhtsPage from 'components/item-pages/PhtsPage'
import useScrollToTopOnMount from 'hooks/useScrollToTopOnMount'
import useStores from 'hooks/useStores'

interface Props extends RouteComponentProps<ShowItemPageMatch> {
  className: string
  itemId: ItemId
}

type KnownItemPagesMap = {
  [index in ItemId]?: ItemPageComponentClass
}

const knownItemPages: KnownItemPagesMap = {
  Cats: CatsPage,
  'Heroes of Might and Magic 3': Heroes3Page,
  PHTS: PhtsPage,
  'Playing cards': PlayingCardsPage,
  Ultramarined: UltramarinedPage,
  'ZX Spectrum': ZxSpectrumPage,
}

const ShowItemPage: React.FunctionComponent<Props> = ({match, className, history}) => {
  const {itemsStore} = useStores()
  const onClose = useCallback(() => {
    openIndex(history)
  }, [])
  useScrollToTopOnMount()

  const item = itemsStore.items[match.params.id]
  if (!item) {
    return <Redirect to={routes.index} />
  }
  const ItemPageComponent: ItemPageComponentClass = knownItemPages[item.id] || SimpleItemPage
  return <ItemPageComponent item={item} onClose={onClose} className={className} />
}

export default withRouter(styled(ShowItemPage)`
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
    font-weight: bold;
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
