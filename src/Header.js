import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const logoutofApp = () => {
    dispatch(logout())
    auth.signOut();
  };

  return (
    <div className='header'>

        <div className="header_left">
            <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="sorry" />

            <div className="header_search">
                <SearchIcon/>
                <input placeholder='Search' type="text" />
            </div>
        </div>

        <div className="header_right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOptions avatar={true} onClick={logoutofApp} title="Me"/>
        </div>
    </div>
  )
}

export default Header