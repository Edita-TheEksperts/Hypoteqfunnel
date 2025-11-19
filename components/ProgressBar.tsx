export default function ProgressBar({ step, className = "" }: any) {
  const percent = ((step - 1) / 6) * 100;

  return (
    <div className={`progress-wrapper ${className}`}>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
