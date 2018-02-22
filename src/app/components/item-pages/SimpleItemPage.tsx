import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'

import PagePadding from './parts/PagePadding'
import PageTitle from './parts/PageTitle'
import PageHtmlContent from './parts/PageHtmlContent'
import asItemPage, {ItemPageProps} from './asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import {Button} from 'app/components'
import {BUTTON_TYPE, DEFAULT_FONT_SIZE, getBorder} from 'app/helpers/buttons'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const SimpleItemPage: React.StatelessComponent<Props> = ({item, onClose, i18nStore}) => (
  <PagePadding>
    <header>
      <PageTitle>{item.name}</PageTitle>
    </header>
    <PageHtmlContent html={item.description}/>
    <footer>
      <Button
        border={getBorder(BUTTON_TYPE.Action)}
        fontSize={DEFAULT_FONT_SIZE}
        onClick={onClose}>
        {i18nStore.labels.close}
      </Button>
    </footer>
  </PagePadding>
)

export default compose(
  asItemPage,
  inject('i18nStore'),
)(SimpleItemPage)
