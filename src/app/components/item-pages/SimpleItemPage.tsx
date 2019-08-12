import React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import {I18nStore} from 'stores/i18nStore'
import ActionButton from 'components/ActionButton'
import Header from './parts/Header'
import Footer from './parts/Footer'
import Padding from './parts/Padding'
import Title from './parts/Title'
import HtmlContent from './parts/HtmlContent'
import asItemPage, {ItemPageProps} from './asItemPage'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const SimpleItemPage: React.FunctionComponent<Props> = ({className, item, onClose, i18nStore}) => (
  <Padding>
    <Header>
      <Title>{item.name}</Title>
    </Header>
    <HtmlContent className={className} html={item.description} />
    <Footer>
      <ActionButton onClick={onClose}>{i18nStore.labels.close}</ActionButton>
    </Footer>
  </Padding>
)

export default compose(
  asItemPage,
  inject('i18nStore'),
)(SimpleItemPage)
