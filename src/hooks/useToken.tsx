import { useLocalStorage } from "./useLocalStorage/useLocalStorage";

export function useToken(): string | null {
  const { getItem } = useLocalStorage();
  const token = getItem("token");

  if (token) {
    return JSON.parse(token);
  }

  return null;
}
