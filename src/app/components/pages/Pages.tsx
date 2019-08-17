import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import routes from 'routes'
import BtnListPage from './BtnListPage'
import ShowItemPage from './ShowItemPage'
import Viewport from './Viewport'

export default () => (
  <Router>
    <Switch>
      <Viewport>
        <Route exact path={routes.index} component={BtnListPage} />
        <Route path={routes.showItem} component={ShowItemPage} />
      </Viewport>
    </Switch>
  </Router>
)
