import * as React from 'react'
import styled from 'styled-components'
import {inject} from 'mobx-react'
import {prepend, compose} from 'ramda'

import Footer from 'app/components/item-pages/parts/Footer'
import Padding from 'app/components/item-pages/parts/Padding'
import Content from 'app/components/item-pages/parts/Content'
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
    <Padding>
      <Content className={className}>
        <CatsList items={items}/>
      </Content>
      <CatsFooter>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </CatsFooter>
    </Padding>
  )
}

const CatsFooter = styled(Footer)`
  padding-left: 4.5rem;
`

export default compose(
  asItemPage,
  inject('i18nStore'),
)(CatsPage)
