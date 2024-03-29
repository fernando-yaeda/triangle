import { SignInParams } from "../types/SignIn";
import { SignUpParams } from "../types/SignUp";
import api from "./api";

export type User = {
  id: string;
  accessToken: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
};

export type Token = {
  token: string;
};

export type SignInResponse = {
  user: User;
  token: Token;
};

async function signUp(data: SignUpParams): Promise<void> {
  return await api.post("/auth/signup", data);
}

async function signIn(data: SignInParams): Promise<SignInResponse> {
  const response = await api.post("/auth/signin", data);
  return response.data;
}

const AuthService = {
  signUp,
  signIn,
};

export default AuthService;
