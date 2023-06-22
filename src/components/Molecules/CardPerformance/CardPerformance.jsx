import "./CardPerformance.css";
import DonutChart from "../../Atoms/DonutChart/DonutChart";

const CardPerformance = () => {
  return (
    <div className="mt-2">
      <div className="row">
        <div className="col-md-4">
          <div className="card-performance__title">
            <p>Gas YTD</p>
          </div>
          <div className="card-performance__donut-chart">
            <DonutChart />
          </div>
        </div>
        <div className="col-md-4">
          <div className="card-performance__title">
            <p>Oil YTD</p>
          </div>
          <div></div>
        </div>
        <div className="col-md-4">
          <div className="card-performance__title">
            <p>Utilization</p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default CardPerformance;
