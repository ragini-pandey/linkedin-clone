import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HeroImg from './images/Ragini.jpg'
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = async () => {
    dispatch(logout())
    await signOut(auth);
  }
  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className='header__search'>
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption avatar={true} title="Me" onClick={logoutOfApp} />

      </div>
    </div>
  )
}

export default Header