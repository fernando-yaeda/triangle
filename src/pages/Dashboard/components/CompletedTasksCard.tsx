import { HorizontalCard } from "../../../components/Main/HorizontalCard";
import { CompletedTasksChart } from "./CompletedTasksChart";

export function CompletedTasksCard() {
  return (
    <HorizontalCard
      title="Total tasks completed"
      subtitle="Tasks completed in last 7 days"
    >
      <CompletedTasksChart />
    </HorizontalCard>
  );
}
