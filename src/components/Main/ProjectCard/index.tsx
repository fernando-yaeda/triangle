import { Circle, DotsThree } from "@phosphor-icons/react";
import { Text } from "../../Text";
import * as S from "./styles";

type ProjectCardProps = {
  id: number;
  title: string;
};

export function ProjectCard({ id, title }: ProjectCardProps) {
  return (
    <S.Container>
      <S.OptionsButton>
        <DotsThree size={32} color="#5C5F62" weight="bold" />
      </S.OptionsButton>

      <Circle size={64} />
      <Text variant="textMd">{title}</Text>
      <Text variant="textSm" color="darkGrey">
        n Boards
      </Text>
    </S.Container>
  );
}
