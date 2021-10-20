import React from 'react'
import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Title from 'components/item-pages/parts/Title'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import {ItemPageProps} from 'components/item-pages/types'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'
import Phts from 'components/Phts'

const PhtsPage: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <Padding>
      <Header>
        <Title>
          <Phts />
        </Title>
      </Header>
      <HtmlContent className={className} html={item.description!} />
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </Padding>
  )
}

export default PhtsPage
