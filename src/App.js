import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import MWHeader from '@/components/header'
import store from './store'
import MWFooter from '@/components/footer'
import routes from './router'
export default memo(function App() {
  return (
    <Provider store={store}>
      <div>
        <MWHeader/>
        {renderRoutes(routes)}
        <MWFooter/>
      </div>
    </Provider>
  )
})
