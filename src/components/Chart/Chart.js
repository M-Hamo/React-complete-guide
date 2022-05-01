import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPinots }) => {
  const maxValue = Math.max(...dataPinots.map((d) => d.value));

  return (
    <div className="chart">
      {dataPinots.map((dataPoint) => (
        <ChartBar key={dataPoint.label} {...dataPoint} maxValue={maxValue} />
      ))}
    </div>
  );
};

export default Chart;
