import styled from "styled-components";
import { CompletedTasksCard } from "./components/CompletedTasksCard";

export default function Dashboard() {
  return (
    <Container>
      <Row>
        <CompletedTasksCard />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Row = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  gap: 20px;

  margin-bottom: 20px;

  @media (max-width: 1300px) {
    flex-wrap: wrap;
  }
`;
