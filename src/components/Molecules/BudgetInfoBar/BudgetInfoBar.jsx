import {
  BarChartFill,
  Briefcase,
  Clipboard2Data,
  CurrencyDollar,
  GraphUpArrow,
  PieChartFill,
} from "react-bootstrap-icons";
import "./BudgetInfobar.css";

const BudgetInfoBar = () => {
  return (
    <div className="mt-2">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>Spend YTD</div>
              <div>
                <div className="d-flex flex-column justify-content-center">
                  <CurrencyDollar size={24} />{" "}
                </div>
                <div className="mt-2">Juta</div>
              </div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>
                <div>
                  <GraphUpArrow size={24} />{" "}
                </div>
                <div className="mt-2">RKAP 2022</div>
              </div>
              <div>$ 128.23</div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>
                <div>
                  <PieChartFill size={24} />{" "}
                </div>
                <div className="mt-2">Target YTD</div>
              </div>
              <div>$ 34.56</div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>
                <div>
                  <BarChartFill size={24} />{" "}
                </div>
                <div className="mt-2">Real YTD 2022</div>
              </div>
              <div>$ 28.34</div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>
                <div>
                  <Clipboard2Data size={24} />{" "}
                </div>
                <div className="mt-2">% Real RKAP</div>
              </div>
              <div >$ 20.50</div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>
                <div>
                  <Briefcase size={24} />{" "}
                </div>
                <div className="mt-2">% Real</div>
              </div>
              <div>$ 82.01</div>
            </div>
          </div>
          <div className="budget-info__card">
            <div className="d-flex justify-content-between align-items-center h-100">
              <div>Budget</div>
              <div>
                <div className="d-flex flex-column justify-content-center">
                  <CurrencyDollar size={24} />{" "}
                </div>
                <div className="mt-2">Juta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetInfoBar;
