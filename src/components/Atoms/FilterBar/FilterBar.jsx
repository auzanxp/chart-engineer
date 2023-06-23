import { ClockHistory, Funnel, Printer } from "react-bootstrap-icons";
import "./FilterBar.css";

const FilterBar = () => {
  return (
    <div className="d-flex gap-2">
      <div className="filter-bar">
        <Funnel />
        <p>Date pick</p>
      </div>
      <div className="filter-bar">
        <ClockHistory />
        <p>Updated at (12/05/2022)</p>
      </div>
      <div className="filter-bar">
        <Printer />
        <p>Print</p>
      </div>
    </div>
  );
};

export default FilterBar;
