import { theme } from "../../styles/theme";
import * as S from "./styles";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  width?: string;
  variant?: keyof typeof S.variants;
  fontVariant?: keyof typeof theme.fontVariants;
}

export default function Button({
  children,
  onClick,
  width,
  variant,
  fontVariant,
}: ButtonProps) {
  return (
    <S.Button
      width={width}
      variant={variant}
      fontVariant={fontVariant}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
