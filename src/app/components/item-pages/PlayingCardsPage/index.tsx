import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import './playing-cards.png'
import Header from 'app/components/item-pages/parts/Header'
import Footer from 'app/components/item-pages/parts/Footer'
import Padding from 'app/components/item-pages/parts/Padding'
import Title from 'app/components/item-pages/parts/Title'
import Content from 'app/components/item-pages/parts/Content'
import asItemPage, {ItemPageProps} from 'app/components/item-pages/asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'
import PlayingCards from './playing-cards.component.svg'
import {UiStore} from 'app/stores/uiStore'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
  uiStore?: UiStore
}

interface Data {
  p1: string
  p2: string
  imgTitle: string
}

const PlayingCardsPage: React.StatelessComponent<Props> =
  ({className, item, onClose, i18nStore, uiStore}) => (
    <Padding>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <Content className={className}>
        <p>{(item.data as Data).p2}</p>
        <p>{(item.data as Data).p1}</p>
        <p>
          <figure>
            <PlayingCards style={{color: uiStore.backgroundColor}}/>
            <figcaption>{(item.data as Data).imgTitle}</figcaption>
          </figure>
        </p>
      </Content>
      <Footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </Footer>
    </Padding>
  )

export default compose(
  asItemPage,
  inject('i18nStore'),
  inject('uiStore'),
)(PlayingCardsPage)
