import * as React from 'react'
import {Provider} from 'mobx-react'

import {Pages} from './pages'
import stores from './stores'

export class App extends React.PureComponent<{}, {}> {
  render() {
    return <Provider {...stores}>
      <Pages/>
    </Provider>
  }
}
