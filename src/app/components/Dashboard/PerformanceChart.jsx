
// components/Dashboard/PerformanceChart.jsx
export default function PerformanceChart() {
  return (
    <div className="row flex-grow">
      <div className="col-12 col-lg-4 col-lg-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="d-sm-flex justify-content-between align-items-start">
              <div>
                <h4 className="card-title card-title-dash">
                  Performance Line Chart
                </h4>
                <h5 className="card-subtitle card-subtitle-dash">
                  Lorem Ipsum is simply dummy text of the printing
                </h5>
              </div>
              <div id="performanceLine-legend"></div>
            </div>
            <div className="chartjs-wrapper mt-4">
              <canvas id="performanceLine" width=""></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}