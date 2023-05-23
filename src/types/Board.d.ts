import { Task } from "./Task";

export type Board = {
  id: number;
  title: string;
  description: string | null;
  userId: number;
  projectId: number;
  tasks: Task[];
};
