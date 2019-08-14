import React from 'react'
import {Provider} from 'mobx-react'

import Pages from 'components/pages/Pages'
import stores from 'stores'
import GlobalStyle from './GlobalStyle'

export const App: React.FunctionComponent = () => (
  <>
    <GlobalStyle />
    <Provider {...stores}>
      <Pages />
    </Provider>
  </>
)
