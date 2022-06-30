import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'

import routes from 'routes'
import BtnListPage from './BtnListPage'
import ShowItemPage from './ShowItemPage'
import Viewport from './Viewport'

export default () => (
  <HashRouter>
    <Routes>
      <Route
        path={routes.index}
        element={
          <>
            <BtnListPage />
          </>
        }
      >
        <Route
          path=":id"
          element={
            <>
              <ShowItemPage />
            </>
          }
        />
      </Route>
    </Routes>
  </HashRouter>
)
