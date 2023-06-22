import "./VolumeSection.css";
import { ChartRight } from "../../Atoms/ChartRight/ChartRight";

export const VolumeSection = () => {
  const data = [
    "Existing Gas",
    "Gas Total",
    "Existing Oil",
    "Oil Total",
    "Oil & Gas Total",
  ];
  return (
    <div className="conten">
      <div className="conten-title">Volume</div>
      {data.map((title, index) => (
        <div key={index}>
          <ChartRight title={title} />
        </div>
      ))}
    </div>
  );
};
