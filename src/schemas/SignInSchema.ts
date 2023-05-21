import { z } from "zod";

export const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z.string().nonempty("password field should not be empty"),
});
