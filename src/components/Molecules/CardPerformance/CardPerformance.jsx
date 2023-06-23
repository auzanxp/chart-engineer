import DoughnutChart from "../../Atoms/DoughnutChart/DoughnutChart";
import "./CardPerformance.css";


const CardPerformance = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-2">
          <div className="card-performance__title">
            <p>Gas YTD</p>
          </div>
          <div className="card-performance__donut-chart">
            <div className="p-2">
              <DoughnutChart percentage={85} />
            </div>
            <div className="text-center pb-1">
              <p className="card-performance__current-target-text">21.573 MMscfd</p>
              <p className="card-performance__target-text">Target : 20.000 MMscfd</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card-performance__title">
            <p>Oil YTD</p>
          </div>
          <div className="card-performance__donut-chart">
            <div className="p-2">
              <DoughnutChart percentage={85} />
            </div>
            <div className="text-center pb-1">
              <p className="card-performance__current-target-text">21.573 BOPD</p>
              <p className="card-performance__target-text">Target : 20.000 BOPD</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-2">
          <div className="card-performance__title">
            <p>Utilization</p>
          </div>
          <div className="card-performance__donut-chart">
            <div className="p-2">
              <DoughnutChart percentage={85} />
            </div>
            <div className="text-center pb-1">
              <p className="card-performance__current-target-text">85%</p>
              <p className="card-performance__target-text">Target : 100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerformance;
