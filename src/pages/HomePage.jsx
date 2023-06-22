import React from "react";
import { Container } from "react-bootstrap";
import FilterBar from "../components/Atoms/FilterBar/FilterBar";

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90vh",
        backgroundColor: "#30373f",
        color: "white",
      }}
    >
      <Container
        className="d-flex gap-2 pt-2"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <div>
            <p>Dashboard</p>
          </div>
        </div>
        <FilterBar />
      </Container>
    </div>
  );
};

export default HomePage;
