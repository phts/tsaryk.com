import React from 'react'
import {Provider} from 'mobx-react'

import Pages from 'components/pages/Pages'
import stores from 'stores'
import GlobalStyle from './GlobalStyle'

export class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <GlobalStyle />
        <Provider {...stores}>
          <Pages />
        </Provider>
      </>
    )
  }
}
