import "./ChartBar.css";

const ChartBar = ({ label, value, maxValue }) => {
  const fillHeight = Math.round((value / maxValue) * 100);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: fillHeight + "%",
            backgroundColor: fillHeight >= 100 ? "orange" : "#4826b9",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
