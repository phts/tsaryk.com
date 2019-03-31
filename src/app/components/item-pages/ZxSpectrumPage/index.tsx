import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import HtmlContent from 'app/components/item-pages/parts/HtmlContent'
import Title from 'app/components/item-pages/parts/Title'
import ZxBorder from './ZxBorder'
import asItemPage, {ItemPageProps} from 'app/components/item-pages/asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const ZxSpectrumPage: React.StatelessComponent<Props> =
  ({className, item, onClose, i18nStore}) => (
    <ZxBorder>
      <header>
        <Title>{item.name}</Title>
      </header>
      <HtmlContent className={className} html={item.description}/>
      <footer>
        <ActionButton
          onClick={onClose}>
          {i18nStore.labels.close}
        </ActionButton>
      </footer>
    </ZxBorder>
  )

export default compose(
  asItemPage,
  inject('i18nStore'),
)(ZxSpectrumPage)
