import type { ChartData } from "chart.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";
import { createFillGradient, createGradient } from "./createGradient";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export const data = {
  labels: ["13", "14", "15", "16", "17", "18", "19"],
  datasets: [
    {
      data: [21, 12, 23, 14, 5, 15, 22],
    },
  ],
};

const options = {
  responsive: true,
  aspectRatio: 3,
  scales: {
    x: {
      border: { display: false },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: { maxTicksLimit: 5 },
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

export function CompletedTasksChart() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      type: "line",

      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        fill: true,
        borderColor: createGradient(chart.ctx),
        pointBorderColor: createGradient(chart.ctx),
        pointBackgroundColor: createGradient(chart.ctx),
        pointHoverBackgroundColor: createGradient(chart.ctx),
        pointHoverBorderColor: createGradient(chart.ctx),
        pointBorderWidth: 2,
        pointHoverRadius: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        backgroundColor: createFillGradient(chart.ctx),
        borderWidth: 2,
        lineTension: 0.4,
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Chart ref={chartRef} type="line" data={chartData} options={options} />
    </div>
  );
}
