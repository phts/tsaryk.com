import * as React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import {BtnListPage} from './BtnListPage'
import {ShowItemPage} from './ShowItemPage'
import {Viewport} from './Viewport'

export const Pages: React.StatelessComponent = () => {
  return <Router>
    <Switch>
      <Viewport>
        <Route exact path="/" component={BtnListPage}/>
        <Route path="/:id" component={ShowItemPage}/>
      </Viewport>
    </Switch>
  </Router>
}
