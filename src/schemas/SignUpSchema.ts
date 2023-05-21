import { z } from "zod";

export const signUpFormSchema = z.object({
  firstName: z
    .string()
    .nonempty("first name should not be empty")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
    }),
  lastName: z
    .string()
    .nonempty("last name should not be empty")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
    }),
  username: z
    .string()
    .nonempty("username field should not be empty")
    .min(6, "username must be longet than 6 characters")
    .max(16, "username must be shorter than 16 characters"),
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z
    .string()
    .nonempty("password field should not be empty")
    .min(6, "password must be longer than 6 characters")
    .max(16, "password must be shorter than 16 characters")
    .regex(
      /(?=.*\d)$/,
      "password must contain at least one digit between [0-9]"
    )
    .regex(
      /(?=.*[a-z])$/,
      "password must contain at least one lowercase letter"
    )
    .regex(
      /(?=.*[A-Z])$/,
      "password must contain at least one uppercase letter"
    )
    .regex(/(?![.\n])$/, "password must not contain escaped characters"),
  terms: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
  offer: z.boolean(),
});
