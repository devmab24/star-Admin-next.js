
// components/Dashboard/DashboardTabs.jsx
export default function DashboardTabs() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between border-bottom">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active ps-0"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#overview"
            type="button"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
          >
            Overview
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#Audiences"
            type="button"
            role="tab"
            aria-controls="Audiences"
            aria-selected="false"
            tabIndex={-1}
          >
            Audiences
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="demographics-tab"
            data-bs-toggle="tab"
            data-bs-target="#demographics"
            type="button"
            role="tab"
            aria-controls="demographics"
            aria-selected="false"
            tabIndex={-1}
          >
            Demographics
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link border-0"
            id="more-tab"
            data-bs-toggle="tab"
            data-bs-target="#more"
            type="button"
            role="tab"
            aria-controls="more"
            aria-selected="false"
            tabIndex={-1}
          >
            More
          </button>
        </li>
      </ul>
      <div>
        <div className="btn-wrapper">
          <a href="#" className="btn btn-otline-dark align-items-center">
            <i className="icon-share"></i> Share
          </a>
          <a href="#" className="btn btn-otline-dark">
            <i className="icon-printer"></i> Print
          </a>
          <a href="#" className="btn btn-primary text-white me-0">
            <i className="icon-download"></i> Export
          </a>
        </div>
      </div>
    </div>
  );
}
