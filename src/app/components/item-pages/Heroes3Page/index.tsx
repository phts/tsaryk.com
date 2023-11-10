import React from 'react'
import styled from 'styled-components'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import Padding from 'components/item-pages/parts/Padding'
import Title from 'components/item-pages/parts/Title'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import {ItemPageProps} from 'components/item-pages/types'
import ActionButton from 'components/ActionButton'
import useStores from 'hooks/useStores'

import cursorDefaultPng from './h3-default.png'
import cursorPointerPng from './h3-pointer.png'

const PaddingWithCursor = styled(Padding)`
  cursor: url(${cursorDefaultPng}) 16 16, default;

  a,
  button {
    cursor: url(${cursorPointerPng}) 16 16, pointer;
  }
`

const Heroes3Page: React.FunctionComponent<ItemPageProps> = ({className, item, onClose}) => {
  const {i18nStore} = useStores()
  return (
    <PaddingWithCursor>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <HtmlContent className={className} html={item.description!} />
      <Footer>
        <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
      </Footer>
    </PaddingWithCursor>
  )
}

export default Heroes3Page
