function DashboardCard({ title, value, icon, color }) {
  return (
    <div className="card bg-secondary-subtle border-0 h-100">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <p className="text-secondary mb-2">{title}</p>
          <h3 className="text-dark mb-0">{value}</h3>
        </div>

        <div className={`fs-2 text-${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;