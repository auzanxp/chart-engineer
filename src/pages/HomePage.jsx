import React from "react";
import FilterBar from "../components/Atoms/FilterBar/FilterBar";
import { VolumeSection } from "../components/Molecules/VolumeSection/VolumeSection";
import PerfomanceSection from "/src/components/Molecules/PerfomanceSection/PerfomanceSection";
import LifeSection from "../components/Molecules/LeftSection/LifeSection";

const HomePage = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: "#30373f",
        color: "white",
      }}
    >
      <div
        className="d-flex gap-2 pt-2 container"
        style={{ justifyContent: "space-between" }}
      >
        <div>
          <p>Dashboard</p>
        </div>
        <FilterBar />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <VolumeSection />
          </div>
          <div className="col-lg-5">
            <PerfomanceSection />
          </div>
          <div className="col-lg-4">
            <LifeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
