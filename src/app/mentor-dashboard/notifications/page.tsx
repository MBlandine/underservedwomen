'use client'
import React from 'react'
import './notifications.css';
import {FiBell as Bell,FiStar as Star,FiSettings as Settings} from 'react-icons/fi';

const notificationItems = [
    { id: 1, type: 'message', title: 'New student question', content: 'Afua asked about Soap Making Procedures', time: '10 min ago', unread: true },
    { id: 2, type: 'achievement', title: 'Course milestone reached', content: 'Marketing Fundamentals reached 500 students!', time: '2 hours ago', unread: true },
    { id: 4, type: 'review', title: 'New course review', content: 'Afua is done with her third course', time: '2 days ago', unread: true }
  ];

export default function NotificationsPage ()  {
  return (
    <div className="notifications-wrapper">
    <div className="notifications-header">
      <h2>Notifications</h2>
      <button className="mark-read-btn">Mark all as read</button>
    </div>

    <div className="notification-list">
      {notificationItems.map((notification) => (
        <div
          key={notification.id}
          className={`notification-card ${notification.unread ? 'unread' : ''}`}
        >
          <div className="notification-content">
            <div
              className={`notification-icon ${
                notification.type === 'message'
                  ? 'message'
                  : notification.type === 'achievement'
                  ? 'achievement'
                  : notification.type === 'system'
                  ? 'system'
                  : 'review'
              }`}
            >
              {notification.type === 'message' && <Bell />}
              {notification.type === 'achievement' && <Star />}
              {notification.type === 'system' && <Settings />}
              {notification.type === 'review' && <Star />}
            </div>

            <div className="notification-info">
              <div className="notification-title-row">
                <h4>{notification.title}</h4>
                <span className="notification-time">{notification.time}</span>
              </div>
              <p className="notification-text">{notification.content}</p>
            </div>

            {notification.unread && <div className="unread-dot" />}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
