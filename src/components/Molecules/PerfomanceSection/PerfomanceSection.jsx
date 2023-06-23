import CardPerformance from "../CardPerformance/CardPerformance";
import "./PerfomanceSection.css";

const PerfomanceSection = () => {
  return (
    <div>
      <div className="conten-wrap">
        <div className="perfomance-title">Performace Summary</div>
        <div>
          <img
            src="/src/assets/images/petaHome.png"
            alt="peta"
            width={"100%"}
          />
        </div>
      </div>
      <CardPerformance />
    </div>
  );
};

export default PerfomanceSection;
