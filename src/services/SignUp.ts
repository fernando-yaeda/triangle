import api from "./api";

interface SignUpParams {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export async function signUp({
  username,
  firstName,
  lastName,
  email,
  password,
}: SignUpParams) {
  const response = await api.post("/auth/signup", {
    username,
    firstName,
    lastName,
    email,
    password,
  });

  return response.data;
}
