import React from 'react'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'

import routes from 'routes'
import BtnListPage from './BtnListPage'
import ShowItemPage from './ShowItemPage'
import Viewport from './Viewport'

export default () => (
  <Router>
    <Routes>
      <Viewport>
        <Route path={routes.index} element={<BtnListPage />} />
        <Route path={routes.showItem} element={<ShowItemPage />} />
      </Viewport>
    </Routes>
  </Router>
)
