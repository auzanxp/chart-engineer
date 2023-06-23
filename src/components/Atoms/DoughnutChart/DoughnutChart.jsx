import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const DoughnutChart = ({ percentage }) => {
  const data = {
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#026184", "#073647"],
        hoverBackgroundColor: ["#026184", "#073647"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutoutPercentage: 70,
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
      enabled: false,
    },
    legend: {
      display: false,
    },
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
          zIndex: 1,
        }}
      >
        <h2 style={{ fontSize: "1rem" }}>{percentage}%</h2>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
