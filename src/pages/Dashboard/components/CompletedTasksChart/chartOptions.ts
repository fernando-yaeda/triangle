import { ChartOptions } from "chart.js";

export const lineChartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      border: { display: false },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: { maxTicksLimit: 4 },
      border: { display: false },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
