import React from 'react'
import styled from 'styled-components'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Title from 'components/item-pages/parts/Title'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import asItemPage, {ItemPageProps} from 'components/item-pages/asItemPage'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'

import cursorDefaultPng from './h3-default.png'
import cursorPointerPng from './h3-pointer.png'

const Heroes3Page: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <PaddingWithCursor>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <HtmlContent className={className} html={item.description} />
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </PaddingWithCursor>
  )
}

const PaddingWithCursor = styled(Padding)`
  cursor: url(${cursorDefaultPng}) 16 16, default;

  button {
    cursor: url(${cursorPointerPng}) 16 16, pointer;
  }
`

export default asItemPage(Heroes3Page)
