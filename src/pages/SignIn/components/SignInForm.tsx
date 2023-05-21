import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../../components/Auth/Forms/Input";
import * as S from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import useAuth from "../../../hooks/useAuth/useAuth";
import { signInFormSchema } from "../../../schemas/SignInSchema";

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignInForm() {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSubmitData = async (data: SignInFormData) => {
    await signIn(data);
  };

  return (
    <S.Form onSubmit={handleSubmit(handleSubmitData)}>
      <Input
        id="email"
        label="Email Address"
        type="email"
        placeholder="Email Address"
        register={register("email")}
        error={errors.email}
      />
      <Input
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <Button
        type="submit"
        width="100%"
        disabled={isSubmitting}
        onClick={() => console.log(isSubmitting)}
      >
        Login
      </Button>
    </S.Form>
  );
}
