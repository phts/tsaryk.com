import React from 'react'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import Title from 'components/item-pages/parts/Title'
import {ItemPageProps} from 'components/item-pages/types'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'
import ZxBorder from './ZxBorder'

const ZxSpectrumPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <ZxBorder>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <HtmlContent className={className} html={item.description} />
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </ZxBorder>
  )
}

export default ZxSpectrumPage
