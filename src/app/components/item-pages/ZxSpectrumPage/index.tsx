import React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import Header from 'components/item-pages/parts/Header'
import Footer from 'components/item-pages/parts/Footer'
import HtmlContent from 'components/item-pages/parts/HtmlContent'
import Title from 'components/item-pages/parts/Title'
import asItemPage, {ItemPageProps} from 'components/item-pages/asItemPage'
import {I18nStore} from 'stores/i18nStore'
import ActionButton from 'components/ActionButton'
import ZxBorder from './ZxBorder'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const ZxSpectrumPage: React.FunctionComponent<Props> = ({className, item, onClose, i18nStore}) => (
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

export default compose(
  asItemPage,
  inject('i18nStore'),
)(ZxSpectrumPage)
