import { HorizontalCard } from "../../../components/Main/HorizontalCard";
import { CompletedTasksChart } from "./CompletedTasksChart";

export function CompletedTasksCard() {
  return (
    <HorizontalCard
      title="Total tasks completed"
      subtitle="Tasks completed in last 7 days"
      style={{ flex: "1 1 632px" }}
    >
      <CompletedTasksChart />
    </HorizontalCard>
  );
}
