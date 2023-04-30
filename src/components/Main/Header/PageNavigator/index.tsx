import { Text } from "../../../Text";
import * as S from "./styles";

interface PageNavigatorProps {
  pageName: string;
}

export function PageNavigator({ pageName = "Home" }: PageNavigatorProps) {
  return (
    <S.Container>
      <Text color="darkGrey" variant="textXl">
        {pageName}
      </Text>
    </S.Container>
  );
}
