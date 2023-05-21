import { ChartConfiguration } from "chart.js";

export const doughnutChartOptions: ChartConfiguration<"doughnut">["options"] = {
  responsive: true,
  aspectRatio: 1,
  cutout: "70%",
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        padding: 20,
      },
      onClick: () => {},
    },
  },
  layout: {
    padding: {
      top: 20,
    },
  },
};
