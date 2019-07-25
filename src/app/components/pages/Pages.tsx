import * as React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import routes from 'routes'
import BtnListPage from './BtnListPage'
import ShowItemPage from './ShowItemPage'
import Viewport from './Viewport'
import InitialRandomizeProvider from './InitialRandomizeProvider'

export default () => (
  <Router>
    <Switch>
      <InitialRandomizeProvider>
        <Viewport>
          <Route exact path={routes.index} component={BtnListPage} />
          <Route path={routes.showItem} component={ShowItemPage} />
        </Viewport>
      </InitialRandomizeProvider>
    </Switch>
  </Router>
)
