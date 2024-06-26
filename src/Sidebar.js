import React from 'react'
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src="https://media.licdn.com/dms/image/D4D16AQHoS8ZukbuoRg/profile-displaybackgroundimage-shrink_350_1400/0/1679896187330?e=1712793600&v=beta&t=FCxK-C8CktjFV6LOZUpTIP-kdSZRVaWz-l8fifRQilA" alt="" />
            <Avatar className='sidebar_avatar' src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed  you</p>
                <p className="sidebar_statNumber">2,457</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className="sidebar_statNumber">1593</p>
            </div>
        </div>

        <div className="sidebar_button">
            <p>Recent</p>
            {recentItem("reactJS")}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar