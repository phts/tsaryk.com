import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import PagePadding from './parts/PagePadding'
import PageTitle from './parts/PageTitle'
import PageContent from './parts/PageContent'
import asItemPage, {ItemPageProps} from './asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'
import PlayingCards from 'static/img/playing-cards.svg'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

interface Data {
  p1: string,
  p2: string,
  imgTitle: string,
}

const PlayingCardsPage: React.StatelessComponent<Props> =
  ({className, item, onClose, i18nStore}) => (
    <PagePadding>
      <header>
        <PageTitle>{item.name}</PageTitle>
      </header>
      <PageContent className={className}>
        <p>{(item.data as Data).p2}</p>
        <p>{(item.data as Data).p1}</p>
        <p>
          <figure>
            <PlayingCards/>
            <figcaption>{(item.data as Data).imgTitle}</figcaption>
          </figure>
        </p>
      </PageContent>
      <footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </footer>
    </PagePadding>
  )

export default compose(
  asItemPage,
  inject('i18nStore'),
)(PlayingCardsPage)
