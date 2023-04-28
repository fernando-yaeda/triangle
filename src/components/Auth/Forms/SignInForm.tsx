import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../Button";
import * as S from "./styles";

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z.string(),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignInForm() {
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
      ></S.Input>
      {errors.password && (
        <S.ErrorText>• {errors.password.message}</S.ErrorText>
      )}
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
          Login
        </Button>
      )}
    </S.Form>
  );
}
