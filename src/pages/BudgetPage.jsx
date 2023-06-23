import BudgetNav from "../components/Atoms/BudgetNav/BudgetNav";
import BudgetInfoBar from "../components/Molecules/BudgetInfoBar/BudgetInfoBar";

const BudgetPage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#30373f",
        color: "white",
      }}
    >
      <BudgetNav />
      <BudgetInfoBar />
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <img
              src="/src/assets/images/petaBudget.png"
              alt="peta"
              width={"100%"}
            />
          </div>
          <div className="col">
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPage;
