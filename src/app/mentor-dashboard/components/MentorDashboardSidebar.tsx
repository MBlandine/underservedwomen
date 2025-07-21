'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome, FaBook, FaUserFriends, FaCog, FaSignOutAlt } from 'react-icons/fa'
import './MentorDashboardSidebar.css'
import Image from 'next/image'
import logo from '../../../../public/yego-shecan-logo.png'


const MentorDashboardSidebar = () => {
    const pathname = usePathname()

    const isActive = (path: string) => pathname === path

    return (
        <aside className="mentorsidebar">
            <div className="mentorsidebar-logo">
                <Image
                    src={logo}
                    alt="Yego SheCan Logo"
                    width={140}
                    height={70}
                    style={{ borderRadius: '50px', objectFit: 'contain', marginTop:'-3rem', marginBottom:'-1.5rem' }}
                />
            </div>
            <nav className="mentorsidebar-nav">
                
            <Link href="/mentor-dashboard" className={isActive('/mentor-dashboard') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaBook /> Dashboard
                </Link>
               
                <Link href="/mentor-dashboard/mentorCourses" className={isActive('/mentor-dashboard/mentorCourses') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaBook /> My Courses
                </Link>
                <Link href="/mentor-dashboard/editContent" className={isActive('/mentor-dashboard/editContent') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaHome /> Edit Content
                </Link>
                {/* <Link href="/mentor-dashboard/students" className={isActive('/mentor-dashboard/students') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaUserFriends /> Students
                </Link> */}
                <Link href="/mentor-dashboard/assignments" className={isActive('/mentor-dashboard/assignments') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaUserFriends /> Manage Quizzes
                </Link>
                <Link href="/mentor-dashboard/availability" className={isActive('/mentor-dashboard/availability') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaHome /> My Availability
                </Link>
                <Link href="/mentor-dashboard/students" className={isActive('/mentor-dashboard/bookings') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaHome /> Booking
                </Link>
                <Link href="/mentor-dashboard/notifications" className={isActive('/mentor-dashboard/notifications') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaCog /> Notifications
                </Link>
                <Link href="/mentor-dashboard/settings" className={isActive('/mentor-dashboard/settings') ? 'mentornav-item active' : 'mentornav-item'}>
                    <FaCog /> Profile Settings
                </Link>
                <Link href="/" className="mentornav-item logout-button">
                    <FaSignOutAlt /> Logout
                </Link>
            </nav>
        </aside>
    )
}

export default MentorDashboardSidebar
