import styled from "styled-components";
import { AnnouncementCard } from "./components/AnnouncementsCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { SetUpAccountCard } from "./components/SetupAccountCard";
import { TasksCard } from "./components/TasksCard";

export default function Home() {
  return (
    <Container>
      <Row>
        <SetUpAccountCard />
      </Row>

      <Row>
        <TasksCard />
        <AnnouncementCard />
      </Row>

      <Row>
        <ProjectsCard />
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
