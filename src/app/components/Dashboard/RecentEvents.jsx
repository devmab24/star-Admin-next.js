
// components/Dashboard/RecentEvents.jsx
export default function RecentEvents() {
  const events = [
    { title: "Change in Directors", date: "Mar 14, 2019" },
    { title: "Other Events", date: "Mar 14, 2019" },
    { title: "Quarterly Report", date: "Mar 14, 2019" },
    { title: "Change in Directors", date: "Mar 14, 2019" },
  ];

  return (
    <div className="card card-rounded">
      <div className="card-body card-rounded">
        <h4 className="card-title card-title-dash">Recent Events</h4>
        {events.map((event, index) => (
          <div key={index} className="list align-items-center border-bottom py-2">
            <div className="wrapper w-100">
              <p className="mb-2 fw-medium">{event.title}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <i className="mdi mdi-calendar text-muted me-1"></i>
                  <p className="mb-0 text-small text-muted">{event.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="list align-items-center pt-3">
          <div className="wrapper w-100">
            <p className="mb-0">
              <a href="#" className="fw-bold text-primary">
                Show all <i className="mdi mdi-arrow-right ms-2"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
