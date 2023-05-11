import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import TasksImage from "../../../assets/tasks.png";
import { Card } from "../../../components/Main/Card";
import { TaskCard } from "../../../components/Main/TaskCard";
import { Text } from "../../../components/Text";
import { useToken } from "../../../hooks/useToken";
import taskService from "../../../services/taskService";
import { Task } from "../../../types/Task";
import { NewTaskModal } from "./NewTaskModal";

export function TasksCard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const token = useToken();

  useEffect(() => {
    async function getTasks() {
      try {
        const tasks = await taskService.getTasks(token);
        setTasks(tasks);
      } catch (error: any) {
        toast.error("Error fetching tasks");
      }
    }
    getTasks();
  }, [tasks]); //eslint-disable-line

  return (
    <Card
      title="Tasks Priorities"
      subtitle="Tasks sorted by priority"
      buttonText="Task"
      buttonIcon={<Plus size={20} />}
      buttonOnClick={() => setIsModalOpen(true)}
    >
      <NewTaskModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />

      {tasks.length > 0 ? (
        tasks.map((task, index) => {
          if (index < 4) {
            return (
              <TaskCard
                key={task.id}
                title={task.title}
                dueDate={task.dueDate}
              />
            );
          }
          return false;
        })
      ) : (
        <>
          <Image src={TasksImage} alt="tasks" />
          <Text variant="headingSm">No tasks found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add{" "}
            <span onClick={() => setIsModalOpen(true)}>New Task</span>
          </Text>
        </>
      )}
    </Card>
  );
}

const Image = styled.img`
  width: 100px;
  height: auto;
  align-self: center;
  padding: 40px 0;
`;
