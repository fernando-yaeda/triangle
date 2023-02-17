import api from "./api";

export async function signUp(
  email: string,
  fullName: string,
  password: string
) {
  const response = await api.post("/users", {
    email,
    fullName,
    password,
  });

  return response.data;
}
