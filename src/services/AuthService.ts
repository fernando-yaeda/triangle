import { AxiosError } from "axios";
import { ISignIn } from "../types/SignIn";
import { ISignUp } from "../types/SignUp";
import api from "./api";

async function signUp(data: ISignUp): Promise<void | AxiosError> {
  return await api.post("/auth/signup", data);
}

async function signIn(data: ISignIn): Promise<void | AxiosError> {
  await api.post("/auth/signin", data);
}

const AuthService = {
  signUp,
  signIn,
};

export default AuthService;
