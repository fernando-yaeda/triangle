import { Plus } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import TasksImage from "../../../assets/tasks.png";
import { Button } from "../../../components/Button";
import { Card } from "../../../components/Main/Card";
import { TaskCard } from "../../../components/Main/TaskCard";
import { Text } from "../../../components/Text";
import { useToken } from "../../../hooks/useToken";
import taskService from "../../../services/taskService";
import { Task } from "../../../types/Task";
import { NewTaskModal } from "./NewTaskModal";

type TaskFilter = "upcoming" | "overdue" | "completed" | "no due date";

export function TasksCard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<TaskFilter>("upcoming");
  const token = useToken();

  function upcommingTasks(tasks: Task[]): Task[] | [] {
    return tasks.filter(
      (task) =>
        task.dueDate &&
        task.dueDate > new Date().toISOString() &&
        task.status !== "DONE"
    );
  }

  function overdueTasks(tasks: Task[]): Task[] | [] {
    return tasks.filter(
      (task) =>
        task.dueDate &&
        task.dueDate < new Date().toISOString() &&
        task.status !== "DONE"
    );
  }

  function completedTasks(tasks: Task[]): Task[] | [] {
    return tasks.filter((task) => task.status === "DONE");
  }

  function noDueDateTasks(tasks: Task[]): Task[] | [] {
    return tasks.filter((task) => !task.dueDate && task.status !== "DONE");
  }

  const { data, isSuccess } = useQuery({
    queryKey: ["tasks-list"],
    queryFn: () =>
      taskService.getTasks(token, { sortBy: "dueDate", orderBy: "ASC" }),
    select: (tasks) => {
      if (filter === "upcoming") return upcommingTasks(tasks);
      if (filter === "overdue") return overdueTasks(tasks);
      if (filter === "completed") return completedTasks(tasks);
      if (filter === "no due date") return noDueDateTasks(tasks);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error fetching tasks");
    },
  });

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
      <TasksFilter>
        <Button
          variant="filterButton"
          fontVariant="textXs"
          onClick={() => setFilter("upcoming")}
          disabled={filter === "upcoming"}
        >
          Upcoming
        </Button>
        <Button
          variant="filterButton"
          fontVariant="textXs"
          onClick={() => setFilter("overdue")}
          disabled={filter === "overdue"}
        >
          Overdue
        </Button>
        <Button
          variant="filterButton"
          fontVariant="textXs"
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed
        </Button>
        <Button
          variant="filterButton"
          fontVariant="textXs"
          onClick={() => setFilter("no due date")}
          disabled={filter === "no due date"}
        >
          No Due Date
        </Button>
      </TasksFilter>

      {isSuccess && data && data.length > 0 ? (
        data.slice(0, 4).map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              dueDate={task.dueDate}
            />
          );
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

const TasksFilter = styled.div`
  width: 100%;
  height: 36px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  margin-bottom: 20px;
`;
