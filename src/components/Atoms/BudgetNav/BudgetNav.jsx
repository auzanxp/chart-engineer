import { ClockHistory, Printer } from "react-bootstrap-icons";

const BudgetNav = () => {
  return (
    <div
      className="d-flex gap-2 pt-2 container mb-2"
      style={{ justifyContent: "space-between" }}
    >
      <div>
        <p>Budget</p>
      </div>
      <div className="d-flex gap-2">
        <div className="filter-bar">
          <ClockHistory />
          <p>Updated at (12/05/2022)</p>
        </div>
        <div className="filter-bar">
          <Printer />
          <p>Print</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetNav;
