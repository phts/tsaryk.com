import React from 'react'

import useStores from 'hooks/useStores'
import ActionButton from 'components/ActionButton'
import Header from './parts/Header'
import Footer from './parts/Footer'
import Padding from './parts/Padding'
import Title from './parts/Title'
import HtmlContent from './parts/HtmlContent'
import {ItemPageProps} from './types'

const SimpleItemPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <Padding>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <HtmlContent className={className} html={item.description!} />
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </Padding>
  )
}

export default SimpleItemPage
