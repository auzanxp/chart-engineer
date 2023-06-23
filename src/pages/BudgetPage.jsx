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
    </div>
  );
};

export default BudgetPage;
