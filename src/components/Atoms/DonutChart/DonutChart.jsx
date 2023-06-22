import React from "react";
import "./DonutChart.css";

const DonutChart = () => {
  const percentage = 85;

  const calculateStrokeDasharray = (percentage) => {
    const circumference = 2 * Math.PI * 80;
    const fillLength = (percentage / 100) * circumference;
    const emptyLength = circumference - fillLength;
    return `${fillLength} ${emptyLength}`;
  };

  return (
    <div className="donut-chart-container">
      <svg className="donut-chart-svg">
        <circle
          className="donut-chart-fill"
          cx="50%"
          cy="50%"
          r="40%"
          strokeDasharray={calculateStrokeDasharray(percentage)}
          transform="rotate(-90 100 100)"
        />
        <text className="donut-chart-text" x="50%" y="50%">
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;
