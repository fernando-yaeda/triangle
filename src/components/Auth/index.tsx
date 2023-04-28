import { ReactNode } from "react";
import facebookLogo from "../../assets/facebook-logo.png";
import googleLogo from "../../assets/google-logo.png";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Text } from "../Text";
import * as S from "./styles";

interface AuthContainerProps {
  icon?: ReactNode;
  title: string;
  subtitle: string;
  hasOAuth?: boolean;
  hasDivider?: boolean;
  children: ReactNode;
}

export default function AuthContainer({
  icon,
  title,
  subtitle,
  hasOAuth = false,
  hasDivider = false,
  children,
}: AuthContainerProps) {
  return (
    <S.Container>
      {icon && icon}

      <Text variant="displayMd">{title}</Text>
      <Text color="darkGrey" variant="textMdRegular">
        {subtitle}
      </Text>

      {hasOAuth && (
        <>
          <Button width="100%" variant="whiteAndGrey">
            <img src={googleLogo} alt="google logo" />
            Sign in with Google
          </Button>
          <Button width="100%" variant="whiteAndGrey">
            <img src={facebookLogo} alt="facebook logo" />
            Sign in with Facebook
          </Button>
        </>
      )}

      {hasDivider && <Divider>{"OR"}</Divider>}

      {children}
    </S.Container>
  );
}
