import { Board } from "../types/Board";
import api from "./api";

export type CreateBoardParams = {
  title: string;
  description: string | null;
  projectId: number;
};

async function create(
  data: CreateBoardParams,
  token: string | null
): Promise<Board> {
  const response = await api.post("/boards", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

async function remove(id: number, token: string | null): Promise<void> {
  return await api.delete(`/boards/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getBoards(token: string | null): Promise<Board[]> {
  const response = await api.get("/boards", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

const boardService = {
  create,
  remove,
  getBoards,
};

export default boardService;
