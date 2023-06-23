import { Route, Routes } from "react-router-dom";
import NavbarHead from "./components/Molecules/NavbarHead";
import NavbarStatus from "./components/Atoms/NavbarStatus/NavbarStatus";
import HomePage from "./pages/HomePage";
import BudgetPage from "./pages/BudgetPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavbarHead />
              <NavbarStatus />
              <HomePage />
            </>
          }
        />
        <Route
          path="/bugdet"
          element={
            <>
              <NavbarHead />
              <NavbarStatus />
              <BudgetPage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
