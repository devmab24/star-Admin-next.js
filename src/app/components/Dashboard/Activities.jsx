
// components/Dashboard/Activities.jsx
export default function Activities() {
  const activities = [
    { name: "Ben Tossell", action: "assign you a task", time: "Just now" },
    { name: "Oliver Noah", action: "assign you a task", time: "1h" },
    { name: "Jack William", action: "assign you a task", time: "1h" },
    { name: "Leo Lucas", action: "assign you a task", time: "1h" },
    { name: "Thomas Henry", action: "assign you a task", time: "1h" },
    { name: "Ben Tossell", action: "assign you a task", time: "1h" },
    { name: "Ben Tossell", action: "assign you a task", time: "1h" },
  ];

  return (
    <div className="card card-rounded">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="card-title card-title-dash">Activities</h4>
          <p className="mb-0">20 finished, 5 remaining</p>
        </div>
        <ul className="bullet-line-list">
          {activities.map((activity, index) => (
            <li key={index}>
              <div className="d-flex justify-content-between">
                <div>
                  <span className="text-light-green">{activity.name}</span> {activity.action}
                </div>
                <p>{activity.time}</p>
              </div>
            </li>
          ))}
        </ul>
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