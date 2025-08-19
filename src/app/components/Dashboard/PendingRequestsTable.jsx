
// components/Dashboard/PendingRequestsTable.jsx
export default function PendingRequestsTable() {
  const requests = [
    {
      name: "Brandon Washington",
      role: "Head admin",
      company: "Company name 1",
      companyType: "company type",
      progress: 85,
      progressText: "79%",
      status: "In progress",
      statusClass: "badge-opacity-warning",
      progressClass: "bg-success",
      image: "/images/faces/face1.jpg"
    },
    {
      name: "Laura Brooks",
      role: "Head admin",
      company: "Company name 1",
      companyType: "company type",
      progress: 65,
      progressText: "65%",
      status: "In progress",
      statusClass: "badge-opacity-warning",
      progressClass: "bg-success",
      image: "/images/faces/face2.jpg"
    },
    // Add more request data...
  ];

  return (
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="d-sm-flex justify-content-between align-items-start">
              <div>
                <h4 className="card-title card-title-dash">Pending Requests</h4>
                <p className="card-subtitle card-subtitle-dash">
                  You have 50+ new requests
                </p>
              </div>
              <div>
                <button
                  className="btn btn-primary btn-lg text-white mb-0 me-0"
                  type="button"
                >
                  <i className="mdi mdi-account-plus"></i>
                  Add new member
                </button>
              </div>
            </div>
            <div className="table-responsive mt-1">
              <table className="table select-table">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check form-check-flat mt-0">
                        <label className="form-check-label">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            aria-checked="false"
                            id="check-all"
                          />
                          <i className="input-helper"></i>
                        </label>
                      </div>
                    </th>
                    <th>Customer</th>
                    <th>Company</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check form-check-flat mt-0">
                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              aria-checked="false"
                            />
                            <i className="input-helper"></i>
                          </label>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex">
                          <img src={request.image} alt="" />
                          <div>
                            <h6>{request.name}</h6>
                            <p>{request.role}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <h6>{request.company}</h6>
                        <p>{request.companyType}</p>
                      </td>
                      <td>
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-1 max-width-progress-wrap">
                            <p className="text-success">{request.progressText}</p>
                            <p>85/162</p>
                          </div>
                          <div className="progress progress-md">
                            <div
                              className={`progress-bar ${request.progressClass}`}
                              role="progressbar"
                              style={{ width: `${request.progress}%` }}
                              aria-valuenow={request.progress}
                              aria-valuemin={0}
                              aria-valuemax={100}
                            ></div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={`badge ${request.statusClass}`}>
                          {request.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}