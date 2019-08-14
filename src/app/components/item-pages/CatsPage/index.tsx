import React from 'react'
import styled from 'styled-components'
import {prepend} from 'ramda'

import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Content from 'components/item-pages/parts/Content'
import {ItemPageProps} from 'components/item-pages/types'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'
import CatsList, {CatsItemsData} from './CatsList'

const CatsPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  const items = prepend({icon: '&#x1F408;', text: item.name})(item.data as CatsItemsData)
  return (
    <Padding>
      <Content className={className}>
        <CatsList items={items} />
      </Content>
      <CatsFooter>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </CatsFooter>
    </Padding>
  )
}

const CatsFooter = styled(Footer)`
  padding-left: 4.5rem;
`

export default CatsPage
