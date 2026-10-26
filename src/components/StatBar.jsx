export default function StatBar({ label, value, scale, color }) {
  return (
    <div className="stat">
      <div className="stat-heading"><span>{label}</span><strong>{value}</strong></div>
      <div className="stat-track" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={160} aria-valuenow={value}>
        <div className="stat-fill" style={{ width: `${scale(value)}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}
