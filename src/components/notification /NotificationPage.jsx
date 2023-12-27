import React, { useState } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Your assignment is due tomorrow!' },
    { id: 2, message: 'New task added: Complete reading for next lecture.' },
    // Add more notifications as needed
  ]);

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, read: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);
  };

  return (
    <div style={{ backgroundColor: '#2C87FF', color: '#333', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '36px', color: 'white' }}>Notifications</h1>
      </header>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '100%', height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
        {notifications.map((notification) => (
          <div key={notification.id} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <p style={{ fontSize: '18px', color: 'black' }}>{notification.message}</p>
            {!notification.read && (
              <button onClick={() => markAsRead(notification.id)} style={{ marginTop: '5px', padding: '5px 10px', backgroundColor: '#2C87FF', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                Mark as Read
              </button>
            )}
          </div>
        ))}
      </div>
      <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>© 2023 Sheshya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default NotificationPage;
