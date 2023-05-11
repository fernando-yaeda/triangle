import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { PageWrapper } from "../../components/Main/PageWrapper";
import { useToken } from "../../hooks/useToken";
import taskService from "../../services/taskService";
import { Task } from "../../types/Task";
import { AnnouncementCard } from "./components/AnnouncementsCard";
import { ProjectsCard } from "./components/ProjectsCard";
import { SetUpAccountCard } from "./components/SetupAccountCard";
import { TasksCard } from "./components/TasksCard";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const token = useToken();

  useEffect(() => {
    async function getTasks() {
      console.log(token);
      try {
        const tasks = await taskService.getTasks(token);
        setTasks(tasks);
      } catch (error: any) {
        toast.error("Error fetching tasks");
      }
    }
    getTasks();
  }, []);

  return (
    <PageWrapper currentPage="Home">
      <Container>
        <Row>
          <SetUpAccountCard />
        </Row>

        <Row>
          <TasksCard userTasks={tasks} />
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
