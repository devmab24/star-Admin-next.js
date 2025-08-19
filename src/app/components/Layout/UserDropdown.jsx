
// components/Layout/UserDropdown.jsx
export default function UserDropdown() {
  return (
    <li className="nav-item dropdown d-none d-lg-block user-dropdown">
      <a
        className="nav-link"
        id="UserDropdown"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          className="img-xs rounded-circle"
          src="/images/faces/face8.jpg"
          alt="Profile image"
        />
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown"
        aria-labelledby="UserDropdown"
      >
        <div className="dropdown-header text-center">
          <img
            className="img-md rounded-circle"
            src="/images/faces/face8.jpg"
            alt="Profile image"
          />
          <p className="mb-1 mt-3 fw-semibold">Allen Moreno</p>
          <p className="fw-light text-muted mb-0">allenmoreno@gmail.com</p>
        </div>
        <a className="dropdown-item">
          <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i>
          My Profile
          <span className="badge badge-pill badge-danger">1</span>
        </a>
        <a className="dropdown-item">
          <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i>
          Messages
        </a>
        <a className="dropdown-item">
          <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i>
          Activity
        </a>
        <a className="dropdown-item">
          <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i>
          FAQ
        </a>
        <a className="dropdown-item">
          <i className="dropdown-item-icon mdi mdi-power text-primary me-2"></i>
          Sign Out
        </a>
      </div>
    </li>
  );
}
