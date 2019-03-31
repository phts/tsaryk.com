import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import Header from './parts/Header'
import Footer from './parts/Footer'
import Padding from './parts/Padding'
import Title from './parts/Title'
import HtmlContent from './parts/HtmlContent'
import asItemPage, {ItemPageProps} from './asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const SimpleItemPage: React.StatelessComponent<Props> = ({className, item, onClose, i18nStore}) => (
  <Padding>
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
  </Padding>
)

export default compose(
  asItemPage,
  inject('i18nStore'),
)(SimpleItemPage)
