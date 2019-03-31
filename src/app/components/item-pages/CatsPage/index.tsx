import * as React from 'react'
import styled from 'app/styled-components'
import {inject} from 'mobx-react'
import {prepend, compose} from 'ramda'

import PagePadding from 'app/components/item-pages/parts/PagePadding'
import PageContent from 'app/components/item-pages/parts/PageContent'
import CatsList, {CatsItemsData} from './CatsList'
import asItemPage, {ItemPageProps} from 'app/components/item-pages/asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const CatsPage: React.StatelessComponent<Props> = ({className, item, onClose, i18nStore}) => {
  const items = prepend({icon: '&#x1F408;', text: item.name})(item.data as CatsItemsData)
  return (
    <PagePadding>
      <PageContent className={className}>
        <CatsList items={items}/>
      </PageContent>
      <Footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </Footer>
    </PagePadding>
  )
}

const Footer = styled.footer`
  padding-left: 4.5rem;
`

export default compose(
  asItemPage,
  inject('i18nStore'),
)(CatsPage)
