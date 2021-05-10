import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import MWHeader from '@/components/header'
import MWFooter from '@/components/footer'
import routes from './router'
export default memo(function App() {
  return (
    <div>
      <MWHeader/>
      {renderRoutes(routes)}
      <MWFooter/>
    </div>
  )
})
