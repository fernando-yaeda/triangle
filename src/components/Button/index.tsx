import { ReactNode } from "react";
import { theme } from "../../styles/theme";
import * as S from "./styles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  width?: string;
  variant?: keyof typeof S.variants;
  fontVariant?: keyof typeof theme.fontVariants;
  type?: "button" | "submit";
}

export function Button({
  children,
  onClick,
  width,
  variant,
  fontVariant,
  type = "button",
}: ButtonProps) {
  return (
    <S.Button
      width={width}
      variant={variant}
      fontVariant={fontVariant}
      onClick={onClick && onClick}
      type={type}
    >
      {children}
    </S.Button>
  );
}
