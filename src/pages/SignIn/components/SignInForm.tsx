import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import * as S from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import AuthService from "../../../services/AuthService";

const signInFormSchema = z.object({
  email: z
    .string()
    .nonempty("email field should not be empty")
    .email("email field should have a valid email address")
    .toLowerCase(),
  password: z.string().nonempty("password field should not be empty"),
});

type SignInFormData = z.infer<typeof signInFormSchema>;

export default function SignInForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleSubmitData = async (data: SignInFormData) => {
    try {
      await AuthService.signIn(data);
      toast.success("You have successfully signed up!");
      navigate("/home");
    } catch (error: any) {
      if (error.response?.data?.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error(
        "Oops... something went wrong. Please try again later"
      );
    }
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
