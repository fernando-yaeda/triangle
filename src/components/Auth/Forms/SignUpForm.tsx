import { useForm } from "react-hook-form";
import { Button } from "../../Button";
import * as S from "./styles";

export default function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const handleSubmitData = (data: any) => {
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
      <S.Label htmlFor="password">Password</S.Label>
      <S.Input
        {...register("password")}
        id="password"
        placeholder="Password"
        type="password"
      ></S.Input>
      <Button type="submit" width="100%">
        Login
      </Button>
    </S.Form>
  );
}
