import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import useAuth from "../../../hooks/useAuth/useAuth";

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z.string().nonempty("password field should not be empty"),
});

export type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignInForm() {
  const { signIn, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSubmitData = async (data: SignInFormData) => {
    await signIn(data);
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
      {loading ? (
        <Button
          disabled={loading}
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
