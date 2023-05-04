import { DotsSixVertical } from "@phosphor-icons/react";
import { ReactNode } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import * as S from "./styles";

interface CardProps {
  title: string;
  subtitle: string;
  buttonIcon?: ReactNode;
  buttonText?: string;
  iconFirst?: boolean;
  hasContent?: boolean;
  children?: ReactNode;
}

export function Card({
  title,
  subtitle,
  buttonIcon,
  buttonText,
  iconFirst = true,
  hasContent = true,
  children,
}: CardProps) {
  return (
    <S.Container hasContent={hasContent}>
      <S.Header>
        <S.TextWrapper>
          <Text variant="headingMd">{title}</Text>
          <Text color="darkGrey">{subtitle}</Text>
        </S.TextWrapper>
        <S.ButtonsWrapper>
          {(buttonText || buttonIcon) && (
            <Button gap="8px" variant="purple" fontVariant="textMd">
              {iconFirst && buttonIcon && buttonIcon}
              {buttonText && buttonText}
              {!iconFirst && buttonIcon && buttonIcon}
            </Button>
          )}
          <DotsSixVertical
            size={32}
            weight="bold"
            color="#5C5F62"
            cursor="pointer"
          />
        </S.ButtonsWrapper>
      </S.Header>
      {children}
    </S.Container>
  );
}
