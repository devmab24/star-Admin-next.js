import NavbarDropdown from "./NavbarDropdown";
import SearchForm from "./SearchForm";
import NotificationDropdown from "./NotificationDropdown";
import MessageDropdown from "./MessageDropdown";
import UserDropdown from "./UserDropdown";

export default function Navbar() {
  return (
    <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
        <div className="me-3">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-bs-toggle="minimize"
          >
            <span className="icon-menu"></span>
          </button>
        </div>
        <div>
          <a className="navbar-brand brand-logo" href="/">
            <img src="/images/logo.svg" alt="logo" />
          </a>
          <a className="navbar-brand brand-logo-mini" href="/">
            <img src="/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
      </div>
      
      <div className="navbar-menu-wrapper d-flex align-items-top">
        <ul className="navbar-nav">
          <li className="nav-item fw-semibold d-none d-lg-block ms-0">
            <h1 className="welcome-text">
              Good Morning, <span className="text-black fw-bold">John Doe</span>
            </h1>
            <h3 className="welcome-sub-text">
              Your performance summary this week
            </h3>
          </li>
        </ul>
        
        <ul className="navbar-nav ms-auto">
          <NavbarDropdown />
          <li className="nav-item d-none d-lg-block">
            <div
              id="datepicker-popup"
              className="input-group date datepicker navbar-date-picker"
            >
              <span className="input-group-addon input-group-prepend border-right">
                <span className="icon-calendar input-group-text calendar-icon"></span>
              </span>
              <input type="text" className="form-control" />
            </div>
          </li>
          <SearchForm />
          <NotificationDropdown />
          <MessageDropdown />
          <UserDropdown />
        </ul>
        
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          data-bs-toggle="offcanvas"
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
}