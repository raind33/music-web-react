import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import MWHeader from '@/components/header'
import store from './store'
import MWFooter from '@/components/footer'
import HYAppPlayerBar from './pages/player/app-player-bar'

import routes from './router'
export default memo(function App() {
  return (
    <Provider store={store}>
      <div>
        <MWHeader/>
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <HYAppPlayerBar/>
        <MWFooter/>
      </div>
    </Provider>
  )
})
