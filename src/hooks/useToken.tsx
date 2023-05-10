import { useLocalStorage } from "./useLocalStorage/useLocalStorage";

export function useToken() {
  const { getItem } = useLocalStorage();
  const token = getItem("token");

  return token;
}
