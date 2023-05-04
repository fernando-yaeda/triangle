import { Plus } from "@phosphor-icons/react";
import styled from "styled-components";
import TasksImage from "../../../assets/tasks.png";
import { Card } from "../../../components/Main/Card";
import { Text } from "../../../components/Text";

interface TasksCardProps {
  userTasks?: string;
}

export function TasksCard({ userTasks }: TasksCardProps) {
  return (
    <Card
      title="Tasks Priorities"
      subtitle="Tasks sorted by priority"
      buttonText="Task"
      buttonIcon={<Plus size={20} />}
    >
      {userTasks ? (
        <div>{userTasks}</div>
      ) : (
        <>
          <Image src={TasksImage} alt="tasks" />
          <Text variant="headingSm">No tasks found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add New Task
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
