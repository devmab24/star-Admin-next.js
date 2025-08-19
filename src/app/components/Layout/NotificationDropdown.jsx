
// components/Layout/NotificationDropdown.jsx
export default function NotificationDropdown() {
  const notifications = [
    {
      icon: "mdi mdi-alert",
      title: "Application Error",
      time: "Just now",
    },
    {
      icon: "mdi mdi-lock-outline",
      title: "Settings",
      time: "Private message",
    },
    {
      icon: "mdi mdi-airballoon",
      title: "New user registration",
      time: "2 days ago",
    },
  ];

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link count-indicator"
        id="notificationDropdown"
        href="#"
        data-bs-toggle="dropdown"
      >
        <i className="icon-bell"></i>
        <span className="count"></span>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
        aria-labelledby="notificationDropdown"
      >
        <a className="dropdown-item py-3 border-bottom">
          <p className="mb-0 fw-medium float-start">
            You have 4 new notifications
          </p>
          <span className="badge badge-pill badge-primary float-end">
            View all
          </span>
        </a>
        {notifications.map((notification, index) => (
          <a key={index} className="dropdown-item preview-item py-3">
            <div className="preview-thumbnail">
              <i className={`${notification.icon} m-auto text-primary`}></i>
            </div>
            <div className="preview-item-content">
              <h6 className="preview-subject fw-normal text-dark mb-1">
                {notification.title}
              </h6>
              <p className="fw-light small-text mb-0">{notification.time}</p>
            </div>
          </a>
        ))}
      </div>
    </li>
  );
}
