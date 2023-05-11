import { CalendarBlank, DotsThree, Tag } from "@phosphor-icons/react";
import dayjs from "dayjs";
import { useState } from "react";
import { Text } from "../../../components/Text";
import { Checkbox } from "../../Checkbox";
import * as S from "./styles";

type TaskCardProps = {
  title: string;
  dueDate: string | null;
};

export function TaskCard({ title, dueDate }: TaskCardProps) {
  const [checked, setChecked] = useState(false);

  let formattedDueDate;
  let formatttedDueTime;

  if (dueDate) {
    formattedDueDate = dayjs(dueDate).format("DD MMM YYYY");
    formatttedDueTime = dayjs(dueDate).format("h:mm A");
  }

  return (
    <S.Container>
      <S.Container>
        <S.CheckboxContainer>
          <Checkbox onClick={() => setChecked(!checked)} checked={checked} />
        </S.CheckboxContainer>

        <S.Details>
          <S.Title>
            <Text variant="textMd">{title}</Text>
          </S.Title>

          <S.Info>
            <CalendarBlank size={18} color="#5c5f62" />
            <Text variant="textSm" color="darkGrey">
              {formattedDueDate ? formattedDueDate : "No due date"}{" "}
              {formatttedDueTime && " - " + formatttedDueTime}
            </Text>

            <Tag size={18} color="#5c5f62" />
            <Text variant="textSm" color="darkGrey">
              No tag
            </Text>
          </S.Info>
        </S.Details>
      </S.Container>
      <DotsThree size={36} color="#5C5F62" weight="bold" />
    </S.Container>
  );
}