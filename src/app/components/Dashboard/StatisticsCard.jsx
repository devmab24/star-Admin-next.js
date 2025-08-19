
// components/Dashboard/StatisticsCard.jsx
export default function StatisticsCard({ title, value, change, isPositive }) {
  return (
    <div>
      <p className="statistics-title">{title}</p>
      <h3 className="rate-percentage">{value}</h3>
      <p className={`d-flex ${isPositive ? 'text-success' : 'text-danger'}`}>
        <i className={`mdi ${isPositive ? 'mdi-menu-up' : 'mdi-menu-down'}`}></i>
        <span>{change}</span>
      </p>
    </div>
  );
}