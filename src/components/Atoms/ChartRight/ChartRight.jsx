import React from "react";
import "./ChartRight.css";

export const ChartRight = ({ title }) => {
  return (
    <div className="frame">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">{title}</div>
          <div className="overlap">
            <div className="text-wrapper-1">Real</div>
            <div className="text-wrapper-2">Target</div>
            <div className="text-wrapper-3">RKAP2022</div>
            <div className="rectangle" />
          </div>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="text-wrapper-4">+9,5%</div>
        </div>
      </div>
    </div>
  );
};
