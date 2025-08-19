
// components/Dashboard/TypeByAmount.jsx
export default function TypeByAmount() {
  return (
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="card-title card-title-dash">Type By Amount</h4>
                </div>
                <div>
                  <canvas className="my-auto" id="doughnutChart"></canvas>
                </div>
                <div id="doughnutChart-legend" className="mt-5 text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
