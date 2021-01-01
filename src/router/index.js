import { Redirect } from 'react-router-dom'
import React from "react";


import Discover from "../views/discover";
import Friend from "../views/friend";
import Mine from "../views/mine";
import Download from "../views/download";
import Recommend from "../views/discover/children/recommend";
import Ranking from "../views/discover/children/ranking";
import Songs from "../views/discover/children/songs";
import Radio from "../views/discover/children/radio";
import Singer from "../views/discover/children/singer";
import Album from "../views/discover/children/album";

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to='/discover'/>
    )
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to='/discover/recommend'/>
        )
      },
      {
        path: '/discover/recommend',
        exact: true,
        component: Recommend
      },
      {
        path: '/discover/ranking',
        exact: true,
        component: Ranking
      },
      {
        path: '/discover/songs',
        component: Songs
      },
      {
        path: '/discover/radio',
        component: Radio
      },
      {
        path: '/discover/singer',
        component: Singer
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
  },
  {
    path: '/my',
    component: Mine
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/download',
    component: Download
  }
]

export default routes;
