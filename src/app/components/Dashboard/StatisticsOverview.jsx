
// components/Dashboard/StatisticsOverview.jsx
import StatisticsCard from "./StatisticsCard";

export default function StatisticsOverview() {
  const statistics = [
    { title: "Bounce Rate", value: "32.53%", change: "-0.5%", isPositive: false },
    { title: "Page Views", value: "7,682", change: "+0.1%", isPositive: true },
    { title: "New Sessions", value: "68.8", change: "68.8", isPositive: false },
    { title: "Avg. Time on Site", value: "2m:35s", change: "+0.8%", isPositive: true },
    { title: "New Sessions", value: "68.8", change: "68.8", isPositive: false },
    { title: "Avg. Time on Site", value: "2m:35s", change: "+0.8%", isPositive: true },
  ];

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="statistics-details d-flex align-items-center justify-content-between">
          {statistics.map((stat, index) => (
            <div key={index} className={index >= 3 ? "d-none d-md-block" : ""}>
              <StatisticsCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
