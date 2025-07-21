'use client'
import './mentor-dashboard.css'
import MentorDashboardNavbar from './components/MentorDashboardNavbar'
import MentorDashboardSidebar from './components/MentorDashboardSidebar'




export default function MentorDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mentordashboard-layout">
      <MentorDashboardSidebar />
      <div className="dashboard-mentor">
        <MentorDashboardNavbar />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  )
}