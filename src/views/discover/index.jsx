import React, {memo} from 'react'

import { renderRoutes } from "react-router-config";
import { NavLink } from "react-router-dom";

import { dicoverMenu } from '@/common/tabbar_data'

import {
  DiscoverWrapper
} from "./style";


const Discover = memo(function (props) {
  const { route } = props;
  return (
    <div>
    <DiscoverWrapper>
        <ul className={'nav'}>
          {
            dicoverMenu.map((item, index) => {
              return (
                <li key={item.title} className={'discoverTag'}>
                  <NavLink to={ item.link } >
                    <em>{ item.title }</em>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
    </DiscoverWrapper>
      { renderRoutes(route.routes) }

    </div>
  )
})
export default Discover;
