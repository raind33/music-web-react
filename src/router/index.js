import { Redirect } from 'react-router-dom'
import MWDiscovery from '@/pages/discovery'
import MWMyFriends from '@/pages/my-friends'
import MWMyMusic from '@/pages/my-music'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discovery"/>
    )
  },
  {
    path: '/discovery',
    exact: true,
    component: MWDiscovery
  },
  {
    path: '/my',
    component: MWMyMusic
  },
  {
    path: '/friends',
    component: MWMyFriends
  }
]

export default routes