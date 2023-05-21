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
import { lineChartOptions } from "./chartOptions";
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

const data: ChartData<"bar"> = {
  labels: ["13", "14", "15", "16", "17", "18", "19"],
  datasets: [
    {
      data: [21, 12, 23, 14, 5, 15, 22],
    },
  ],
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
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <Chart
        ref={chartRef}
        type="line"
        data={chartData}
        options={lineChartOptions}
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
}
