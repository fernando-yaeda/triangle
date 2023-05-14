import styled from "styled-components";
import { PageWrapper } from "../../components/Main/PageWrapper";
import { AnnouncementCard } from "./components/AnnouncementsCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { SetUpAccountCard } from "./components/SetupAccountCard";
import { TasksCard } from "./components/TasksCard";

export default function Home() {
  return (
    <PageWrapper currentPage="Home">
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
    </PageWrapper>
  );
}

const Container = styled.div`
  width: 100%;
`;

const Row = styled.div`
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
