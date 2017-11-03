import * as React from 'react'
import {Provider} from 'mobx-react'

import {BtnList} from './components'
import {stores} from './stores'

export class App extends React.Component<{}, {}> {
  render() {
    return <Provider {...stores}>
      <BtnList/>
    </Provider>
  }
}
