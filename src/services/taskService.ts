import { Task } from "../types/Task";
import api from "./api";

export type CreateTaskParams = {
  title: string;
  description: string | null;
  dueDate: Date | null;
};

async function create(
  data: CreateTaskParams,
  token: string | null
): Promise<void> {
  const response = await api.post("/tasks", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getTasks(token: string | null): Promise<Task[]> {
  const response = await api.get("/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const taskService = {
  create,
  getTasks,
};

export default taskService;
