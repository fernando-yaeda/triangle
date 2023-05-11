import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import styled from "styled-components";
import TasksImage from "../../../assets/tasks.png";
import { Card } from "../../../components/Main/Card";
import { TaskCard } from "../../../components/Main/TaskCard";
import { Text } from "../../../components/Text";
import { Task } from "../../../types/Task";
import { NewTaskModal } from "./NewTaskModal";

interface TasksCardProps {
  userTasks: Task[];
}

export function TasksCard({ userTasks }: TasksCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
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

      {userTasks.length > 0 ? (
        userTasks.map((task, index) => {
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
