import { AxiosError } from "axios";
import { ISignUp } from "../types/SignUp";
import api from "./api";

async function signUp(data: ISignUp): Promise<void | AxiosError> {
  return await api.post("/auth/signup", data);
}

const AuthService = {
  signUp,
};

export default AuthService;
