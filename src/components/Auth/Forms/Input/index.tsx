import { HTMLAttributes } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import * as S from "./styles";

type InputProps = {
  id: string;
  label: string;
  type: string;
  error: FieldError | undefined;
  register: UseFormRegisterReturn<string>;
} & HTMLAttributes<HTMLInputElement>;

export default function Input({
  id,
  label,
  type,
  error,
  register,
  ...rest
}: InputProps) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input id={id} type={type} {...register} {...rest} />
      {error && <S.ErrorText>• {error.message}</S.ErrorText>}
    </S.InputContainer>
  );
}
