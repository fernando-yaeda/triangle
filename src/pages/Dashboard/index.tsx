import styled from "styled-components";
import { CompletedTasksCard } from "./components/CompletedTasksCard";
import { TotalTasksCard } from "./components/TotalTasksCard";

export default function Dashboard() {
  return (
    <>
      <Row>
        <CompletedTasksCard />
        <TotalTasksCard />
      </Row>
    </>
  );
}

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;

  margin-bottom: 20px;

  @media (max-width: 1440px) {
    height: 340px;
  }
`;
