import { Project } from "../types/Project";
import api from "./api";

export type CreateProjectParams = {
  title: string;
  description: string | null;
};

async function create(
  data: CreateProjectParams,
  token: string | null
): Promise<Project> {
  const response = await api.post("/projects", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function getProjects(token: string | null): Promise<Project[]> {
  const response = await api.get(`/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const projectService = {
  create,
  getProjects,
};

export default projectService;
