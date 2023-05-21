import { HorizontalCard } from "../../../components/Main/HorizontalCard";

import { TotalTasksChart } from "./TotalTasksChart";

export const data = {
  labels: ["Completed", "Pending", "Blocked", "WorkingOn"],
  datasets: [
    {
      data: [12, 19, 3, 2],
      backgroundColor: ["#6F47EB", "#B161FF", "#EBBCFF", "#EDEDED"],
    },
  ],
};

export function TotalTasksCard() {
  return (
    <HorizontalCard
      title="Total tasks by status"
      subtitle="Tasks by status in last 7 days"
      style={{ flex: "1 1 368px" }}
    >
      <TotalTasksChart />
    </HorizontalCard>
  );
}
