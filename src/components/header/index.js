import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { headerLinks } from '@/common/local-data'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
export default memo(function MWHeader() {
  function renderLink (item, index) {
    if (index < 3) {
      return (
      <NavLink exact  key={index} to={item.link}>
        {item.title}
        <i className="sprite_01 icon"></i>
      </NavLink>
      )
    } 
    return <a key={index} href={item.link}>{item.title}</a>
  }
  return (
    <HeaderWrapper>
      <div className="navbar">
        <HeaderLeft>
          <div className="sprite_01 logo">
            <a href="/">网易云音乐</a>
          </div>
          <ul>
            { headerLinks.map((item, index) => {
              return (
                <li key={index}>
                  {renderLink(item, index)}
                </li>
              )
            })}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
