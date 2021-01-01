import React, {memo} from 'react'

import { TabContent } from "./style";

const TabControl = memo(function (props) {
  return (
    <TabContent>
      <div className={'tabControl'}>
        <a href={props.router} className={'topTitle'}>{props.title }</a>
        <a href={props.router} className={'more'}>更多</a>
      </div>
    </TabContent>
  )
})
export default TabControl;
