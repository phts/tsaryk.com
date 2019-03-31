import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import styled from 'app/styled-components'

import Header from 'app/components/item-pages/parts/Header'
import Footer from 'app/components/item-pages/parts/Footer'
import Padding from 'app/components/item-pages/parts/Padding'
import Title from 'app/components/item-pages/parts/Title'
import HtmlContent from 'app/components/item-pages/parts/HtmlContent'
import asItemPage, {ItemPageProps} from 'app/components/item-pages/asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

import cursorDefaultPng from './h3-default.png'
import cursorPointerPng from './h3-pointer.png'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const Heroes3Page: React.StatelessComponent<Props> =
  ({className, item, onClose, i18nStore}) => (
    <PaddingWithCursor>
      <Header>
        <Title>{item.name}</Title>
      </Header>
      <HtmlContent className={className} html={item.description}/>
      <Footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </Footer>
    </PaddingWithCursor>
  )

const PaddingWithCursor = styled(Padding)`
  cursor: url(${cursorDefaultPng}) 16 16, default;

  button {
    cursor: url(${cursorPointerPng}) 16 16, pointer;
  }
`

export default compose(
  asItemPage,
  inject('i18nStore'),
)(Heroes3Page)
