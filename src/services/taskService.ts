import { Task } from "../types/Task";
import api from "./api";

export type CreateTaskParams = {
  title: string;
  description: string | null;
  dueDate: string | null;
};

export type PatchTaskParams = {
  id: number;
  status: "DONE" | "IN_PROGRESS" | "DONE";
};

type taskQuery = {
  search?: string;
  status?: "DONE" | "IN_PROGRESS" | "OPEN";
  sortBy?: "dueDate" | "title" | "description";
  orderBy?: "ASC" | "DESC";
};

async function create(
  data: CreateTaskParams,
  token: string | null
): Promise<Task> {
  const response = await api.post("/tasks", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getTasks(
  token: string | null,
  { search, status, sortBy, orderBy }: taskQuery
): Promise<Task[]> {
  let query = "/?";
  if (search) query += `search=${search}&`;
  if (status) query += `status=${status}&`;
  if (sortBy) query += `sortBy=${sortBy}&`;
  if (orderBy) query += `orderBy=${orderBy}&`;

  const response = await api.get(`/tasks${query.length > 2 ? query : ""}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function updateStatus(
  { id, status }: PatchTaskParams,
  token: string | null
): Promise<Task[]> {
  const response = await api.patch(
    `tasks/${id}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
}

const taskService = {
  create,
  getTasks,
  updateStatus,
};

export default taskService;
