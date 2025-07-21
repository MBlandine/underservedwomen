'use client'

import { useAuth } from '@/contexts/AuthContext'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'
import './MentorDashboardNavbar.css'

const MentorDashboardNavbar = () => {

  const { user, loading } = useAuth();


  if (loading) {
    return (
      <header className="mentordashboard-navbar">
        <h1 className="mentordashboard-title">Mentor Dashboard</h1>
        <div className="mentordashboard-user loading-user">
          <div className="mentor mentor-icon"></div>
          <div className="mentor mentor-text"></div>
        </div>
      </header>
    );
  }
  if (!user || user.role !== 'mentor') {
    return (
        <header className="mentordashboard-navbar">
            <h1 className="mentordashboard-title">Mentor Dashboard</h1>
        </header>
    );
  }

  return (
    <header className="mentordashboard-navbar">
      <h1 className="mentordashboard-title">Mentor Dashboard</h1>

      <div className="mentordashboard-user">

        {user.profile_picture_url ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${user.profile_picture_url}`}
            alt="User profile picture"
            width={36}
            height={36}
            className="user-avatar" 
          />
        ) : (

          <FaUserCircle className="user-icon" />
        )}


        <span className="username">{user.username} </span>
      </div>
    </header>
  )
}

export default MentorDashboardNavbar