export type Task = {
  id: number;
  title: string;
  description: string | null;
  dueDate: string | null;
  status: string;
  userId: number;
};
