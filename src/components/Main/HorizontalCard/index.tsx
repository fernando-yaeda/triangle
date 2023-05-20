import { DotsSixVertical } from "@phosphor-icons/react";
import { HTMLAttributes, ReactNode } from "react";
import { Button } from "../../Button";
import { Text } from "../../Text";
import * as S from "./styles";

type HorizontalCardProps = {
  title: string;
  subtitle: string;
  buttonIcon?: ReactNode;
  buttonText?: string;
  buttonOnClick?: () => void;
  iconFirst?: boolean;
  hasContent?: boolean;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export function HorizontalCard({
  title,
  subtitle,
  buttonIcon,
  buttonText,
  buttonOnClick,
  iconFirst = true,
  children,
  hasContent,
  ...rest
}: HorizontalCardProps) {
  return (
    <S.Container {...rest}>
      <S.Header>
        <S.TextWrapper>
          <Text type="p" variant="textLg">
            {title}
          </Text>
          <Text type="p" variant="textSmRegular" color="darkGrey">
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
      {hasContent ? <S.Content>{children}</S.Content> : children}
    </S.Container>
  );
}
