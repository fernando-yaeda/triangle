import { Text } from "../Text";
import * as S from "./styles";

interface DividerProps {
  children?: string;
}

export function Divider({ children }: DividerProps) {
  return (
    <S.Container>
      <S.HorizonalLine />
      {children && (
        <>
          <Text color="darkGrey" variant="textXsRegular">
            {children}
          </Text>
          <S.HorizonalLine />
        </>
      )}
    </S.Container>
  );
}
