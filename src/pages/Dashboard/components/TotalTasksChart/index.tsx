import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { doughnutChartOptions } from "./chartOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

const data: ChartData<"doughnut"> = {
  labels: ["Completed", "In Progress", "Blocked", "Pending"],
  datasets: [
    {
      data: [12, 19, 3, 2],
      backgroundColor: ["#6F47EB", "#B161FF", "#EBBCFF", "#EDEDED"],
    },
  ],
};

export function TotalTasksChart() {
  return (
    <div
      style={{ maxHeight: "260px", maxWidth: "260px", position: "relative" }}
    >
      <Doughnut data={data} options={doughnutChartOptions} />
    </div>
  );
}
