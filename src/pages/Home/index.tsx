import styled from "styled-components";
import { PageWrapper } from "../../components/Main/PageWrapper";
import { AnnouncementCard } from "./components/AnnouncementsCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { SetUpAccountCard } from "./components/SetupAccountCard";
import { TasksCard } from "./components/TasksCard";

export default function Home() {
  // const { userData } = useContext(UserDataContext) as UserDataContextType;

  return (
    <PageWrapper>
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
  flex: 0 0 auto;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: flex-start;
  gap: 20px;

  margin-bottom: 20px;
`;
