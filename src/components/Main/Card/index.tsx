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
  buttonOnClick?: () => void;
  iconFirst?: boolean;
  hasContent?: boolean;
  children?: ReactNode;
}

export function Card({
  title,
  subtitle,
  buttonIcon,
  buttonText,
  buttonOnClick,
  iconFirst = true,
  hasContent = true,
  children,
}: CardProps) {
  return (
    <S.Container hasContent={hasContent}>
      <S.Header>
        <S.TextWrapper>
          <Text variant="textLg">{title}</Text>
          <Text variant="textSmRegular" color="darkGrey">
            {subtitle}
          </Text>
        </S.TextWrapper>
        <S.ButtonsWrapper onClick={buttonOnClick}>
          {(buttonText || buttonIcon) && (
            <Button gap="8px" variant="purple" fontVariant="textSm">
              {iconFirst && buttonIcon && buttonIcon}
              {buttonText && buttonText}
              {!iconFirst && buttonIcon && buttonIcon}
            </Button>
          )}
          <DotsSixVertical size={32} color="#5C5F62" cursor="pointer" />
        </S.ButtonsWrapper>
      </S.Header>
      {children}
    </S.Container>
  );
}
