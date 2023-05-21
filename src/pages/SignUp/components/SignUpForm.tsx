import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as S from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import useAuth from "../../../hooks/useAuth/useAuth";
import { signUpFormSchema } from "../../../schemas/SignUpSchema";

type SignUpFormData = z.infer<typeof signUpFormSchema>;

export default function SignUpForm() {
  const { signUp, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleSubmitData = async (data: SignUpFormData) => {
    signUp(data);
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
        </S.InputContainer>

        <S.InputContainer>
          <S.Label htmlFor="name">Last Name</S.Label>
          <S.Input
            {...register("lastName")}
            id="lastName"
            placeholder="Last Name"
            type="text"
          />
        </S.InputContainer>
      </S.MultipleInputsContainer>
      {(errors.firstName || errors.lastName) && (
        <S.MultipleInputsErrors>
          {errors.firstName && (
            <S.ErrorText>• {errors.firstName.message}</S.ErrorText>
          )}
          {errors.lastName && (
            <S.ErrorText>• {errors.lastName.message}</S.ErrorText>
          )}
        </S.MultipleInputsErrors>
      )}

      <S.Label htmlFor="username">Username</S.Label>
      <S.Input
        {...register("username")}
        id="username"
        placeholder="Username"
        type="username"
      />
      {errors.username && (
        <S.ErrorText>• {errors.username.message}</S.ErrorText>
      )}

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

      {loading ? (
        <Button
          disabled={loading}
          variant="whiteAndGrey"
          type="submit"
          width="100%"
        >
          Register Now
        </Button>
      ) : (
        <Button type="submit" width="100%">
          Register Now
        </Button>
      )}
    </S.Form>
  );
}
