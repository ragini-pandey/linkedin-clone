import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
  const user = useSelector(selectUser)
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
        <Avatar src={user?.photoUrl} className='sidebar__avatar' >{user?.email[0]}</ Avatar >
        <h2>{user?.displayName}</h2>
        <h4>{user?.email}</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on your post</p>
          <p className='sidebar__statNumber'>2,453</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('design')}
        {recentItem('developer')}
        {recentItem('softwaredevelopment')}
      </div>
    </div>
  )
}

export default Sidebar