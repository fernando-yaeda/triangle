import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../Button";
import * as S from "./styles";

const signInFormSchema = z.object({
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
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z.string(),
  terms: z.literal<boolean>(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
  offer: z.boolean(),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignUpForrm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSubmitData = async (data: SignInFormData) => {
    console.log("submit", data);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitData)}>
      <S.MultipleInputsContainer>
        <S.InputContainer>
          <S.Label htmlFor="name">First Name</S.Label>
          <S.Input
            {...register("firstName")}
            id="fistName"
            placeholder="First Name"
            type="text"
          />
          {errors.firstName && (
            <S.ErrorText>• {errors.firstName.message}</S.ErrorText>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <S.Label htmlFor="name">Last Name</S.Label>
          <S.Input
            {...register("lastName")}
            id="lastName"
            placeholder="Last Name"
            type="text"
          />
          {errors.lastName && (
            <S.ErrorText>• {errors.lastName.message}</S.ErrorText>
          )}
        </S.InputContainer>
      </S.MultipleInputsContainer>

      <S.Label htmlFor="email">Email Address</S.Label>
      <S.Input
        {...register("email")}
        id="email"
        placeholder="Email Address"
        type="email"
      />
      {errors.email && <S.ErrorText>• {errors.email.message}</S.ErrorText>}

      <S.Label htmlFor="password">Password</S.Label>
      <S.Input
        {...register("password")}
        id="password"
        placeholder="Password"
        type="password"
      />
      {errors.password && (
        <S.ErrorText>• {errors.password.message}</S.ErrorText>
      )}

      <S.CheckboxContainer>
        <S.Checkbox {...register("terms")} id="terms" type="checkbox" />
        <S.Label htmlFor="terms">
          {`I accept Tiangle's Terms of Service and Privacy Policy.`}
        </S.Label>

        {errors.terms && <S.ErrorText>• {errors.terms.message}</S.ErrorText>}
      </S.CheckboxContainer>

      <S.CheckboxContainer>
        <S.Checkbox {...register("offer")} id="offer" type="checkbox" />
        <S.Label htmlFor="offer">
          {`I wish to receive tips and offers from Triangle.`}
        </S.Label>
      </S.CheckboxContainer>

      {isSubmitting ? (
        <Button
          disabled={isSubmitting}
          variant="whiteAndGrey"
          type="submit"
          width="100%"
        >
          Login
        </Button>
      ) : (
        <Button type="submit" width="100%">
          Register Now
        </Button>
      )}
    </S.Form>
  );
}
