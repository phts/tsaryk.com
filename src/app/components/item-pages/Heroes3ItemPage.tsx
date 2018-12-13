import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import styled from 'app/styled-components'

import PagePadding from './parts/PagePadding'
import PageTitle from './parts/PageTitle'
import PageHtmlContent from './parts/PageHtmlContent'
import asItemPage, {ItemPageProps} from './asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

import cursorDefaultPng from 'static/cursor/h3-deafult.png'
import cursorPointerPng from 'static/cursor/h3-pointer.png'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const Heroes3ItemPage: React.StatelessComponent<Props> =
  ({className, item, onClose, i18nStore}) => (
    <PagePaddingWithCursor>
      <header>
        <PageTitle>{item.name}</PageTitle>
      </header>
      <PageHtmlContent className={className} html={item.description}/>
      <footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </footer>
    </PagePaddingWithCursor>
  )

const PagePaddingWithCursor = styled(PagePadding)`
  cursor: url(${cursorDefaultPng}) 16 16, default;

  button {
    cursor: url(${cursorPointerPng}) 16 16, pointer;
  }
`

export default compose(
  asItemPage,
  inject('i18nStore'),
)(Heroes3ItemPage)
