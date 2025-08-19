
// components/Dashboard/StatusSummary.jsx
export default function StatusSummary() {
  return (
    <div className="row flex-grow">
      <div className="col-md-6 col-lg-12 grid-margin stretch-card">
        <div className="card bg-primary card-rounded">
          <div className="card-body pb-0">
            <h4 className="card-title card-title-dash text-white mb-4">
              Status Summary
            </h4>
            <div className="row">
              <div className="col-sm-4">
                <p className="status-summary-ight-white mb-1">Closed Value</p>
                <h2 className="text-info">357</h2>
              </div>
              <div className="col-sm-8">
                <div className="status-summary-chart-wrapper pb-4">
                  <canvas id="status-summary"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex justify-content-between align-items-center mb-2 mb-sm-0">
                  <div className="circle-progress-width">
                    <div id="totalVisitors" className="progressbar-js-circle pr-2"></div>
                  </div>
                  <div>
                    <p className="text-small mb-2">Total Visitors</p>
                    <h4 className="mb-0 fw-bold">26.80%</h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="circle-progress-width">
                    <div id="visitperday" className="progressbar-js-circle pr-2"></div>
                  </div>
                  <div>
                    <p className="text-small mb-2">Visits per day</p>
                    <h4 className="mb-0 fw-bold">9065</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
