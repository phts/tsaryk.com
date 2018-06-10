import * as React from 'react'
import {inject} from 'mobx-react'
import {compose} from 'ramda'
import {ThemeProvider} from 'app/styled-components'

import blackTheme from 'app/themes/blackTheme'
import ThemedPagePadding from './parts/ThemedPagePadding'
import PageTitle from './parts/PageTitle'
import PageHtmlContent from './parts/PageHtmlContent'
import asItemPage, {ItemPageProps} from './asItemPage'
import {I18nStore} from 'app/stores/i18nStore'
import ActionButton from 'app/components/ActionButton'

interface Props extends ItemPageProps {
  i18nStore?: I18nStore
}

const PinkFloydItemPage: React.StatelessComponent<Props> = ({className, item, onClose, i18nStore}) => (
  <ThemeProvider theme={blackTheme}>
    <ThemedPagePadding>
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
    </ThemedPagePadding>
  </ThemeProvider>
)

export default compose(
  asItemPage,
  inject('i18nStore'),
)(PinkFloydItemPage)
