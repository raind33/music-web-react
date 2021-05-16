import { Redirect } from 'react-router-dom'
import React from 'react'
import MWDiscovery from '@/pages/discovery'
import MWMyFriends from '@/pages/my-friends'
import MWMyMusic from '@/pages/my-music'
const MWRecommend = React.lazy(_ => import("../pages/discovery/c-pages/recommend"))
const MWRanking = React.lazy(_ => import("../pages/discovery/c-pages/ranking"))
const MWSongs = React.lazy(_ => import("../pages/discovery/c-pages/songs"))
const MWDjradio = React.lazy(_ => import("../pages/discovery/c-pages/djradio"))
const MWArtist = React.lazy(_ => import("../pages/discovery/c-pages/artist"))
const MWAlbum = React.lazy(_ => import("../pages/discovery/c-pages/album"))
// const HYPlayer = React.lazy(_ => import("../pages/player"));
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
    component: MWDiscovery,
    routes: [
      {
        path: "/discovery",
        exact: true,
        render: () => (
          <Redirect to="/discovery/recommend"/>
        )
      },
      {
        path: "/discovery/recommend",
        component: MWRecommend
      },
      {
        path: "/discovery/ranking",
        component: MWRanking
      },
      {
        path: "/discovery/songs",
        component: MWSongs
      },
      {
        path: "/discovery/djradio",
        exact: true,
        component: MWDjradio
      },
      {
        path: "/discovery/artist",
        component: MWArtist
      },
      {
        path: "/discovery/album",
        component: MWAlbum
      },
      // {
      //   path: "/discovery/player",
      //   component: HYPlayer
      // }
    ]
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