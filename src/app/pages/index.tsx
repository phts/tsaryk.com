import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import BtnListPage from './BtnListPage'
import ShowItemPage from './ShowItemPage'
import Viewport from './Viewport'
import InitialRandomizeProvider from './InitialRandomizeProvider'
import {routes} from 'app/routes'

export const Pages: React.StatelessComponent = () => {
  return <Router>
    <Switch>
      <InitialRandomizeProvider>
        <Viewport>
          <Route exact path={routes.indexPage} component={BtnListPage}/>
          <Route path={routes.showItemPage} component={ShowItemPage}/>
        </Viewport>
      </InitialRandomizeProvider>
    </Switch>
  </Router>
}
