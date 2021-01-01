import React, {memo} from 'react'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { NavLink } from "react-router-dom";
import Login from "../../views/login";
import {
  HeaderDiv,
  HeartDiv,
  CreaterCenter,
  InputDiv
} from "./style";
import { headerLinks } from '@/common/tabbar_data'

const Header = memo(function (props) {


  // 渲染路由
  const showItem = (item, index) => {
    if(index < 3 || index ===5){
      return (
        <NavLink to={item.link} className={'item'} >
          <em>{ item.title }</em>
        </NavLink>
      )
    }else if(index >= 3 && index < 5){
      return (
        <a href={item.link} className={'item'}>
          <em>{ item.title }</em>
        </a>
      )
    }
  }

  return (
  <HeaderDiv>
      <HeartDiv>
        {/*logo*/}
        <a href="#/" className={'logo'}>{}</a>

        {/*导航*/}
        <ul className={'nav'}>
          {
            headerLinks.map((item, index) => {
              return (
                <li key={index} className={'navItem'} >
                  { showItem(item, index) }
                </li>
              )
            })
          }
        </ul>

      {/* 右边*/}

        {/*搜索框*/}
        <InputDiv>
            <label htmlFor="search" className={'searchLabel'}>
              <Input
                placeholder="音乐/视频/电台/用户"
                prefix={<SearchOutlined />}
                id={'search'} />
            </label>
        </InputDiv>
        {/* 创作者中心*/}
        <CreaterCenter>创作者中心</CreaterCenter>

        {/*登录部分*/}
          <Login/>

      </HeartDiv>
    </HeaderDiv>
  )
})
export default Header;
