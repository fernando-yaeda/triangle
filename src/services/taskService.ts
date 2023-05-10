import api from "./api";

export type CreateTaskParams = {
  name: string;
  description?: string;
  dueDate?: Date;
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

const taskService = {
  create,
};

export default taskService;
