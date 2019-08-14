import './playing-cards.png'

import React from 'react'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Title from 'components/item-pages/parts/Title'
import Content from 'components/item-pages/parts/Content'
import asItemPage, {ItemPageProps} from 'components/item-pages/asItemPage'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'

import PlayingCards from './playing-cards.component.svg'

interface Data {
  p1: string
  p2: string
  imgTitle: string
}

const PlayingCardsPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {uiStore, i18nStore} = useStores()
  return (
    <Padding>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <Content className={className}>
        <p>{(item.data as Data).p2}</p>
        <p>{(item.data as Data).p1}</p>
        <figure>
          <PlayingCards style={{color: uiStore.backgroundColor}} />
          <figcaption>{(item.data as Data).imgTitle}</figcaption>
        </figure>
      </Content>
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </Padding>
  )
}

export default asItemPage(PlayingCardsPage)
