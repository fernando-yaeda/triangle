import { CalendarBlank, DotsThree, Tag } from "@phosphor-icons/react";
import dayjs from "dayjs";
import * as utc from "dayjs/plugin/utc";
import { useState } from "react";
import { toast } from "react-toastify";
import { Text } from "../../../components/Text";
import { useToken } from "../../../hooks/useToken";
import taskService from "../../../services/taskService";
import { Checkbox } from "../../Checkbox";
import * as S from "./styles";
dayjs.extend(utc);

type TaskCardProps = {
  id: number;
  title: string;
  dueDate: string | null;
};

export function TaskCard({ id, title, dueDate }: TaskCardProps) {
  const [checked, setChecked] = useState(false);
  const token = useToken();
  let formattedDueDate;

  if (dueDate) {
    formattedDueDate = dayjs(dueDate).format("DD MMM YYYY - h:mm A");
  }

  async function handleTask(id: number) {
    try {
      await taskService.updateStatus({ id, status: "DONE" }, token);
      setChecked(!checked);
      toast.success("card checked successfully");
    } catch (error) {
      toast.error("failed to update card status");
    }
  }

  return (
    <S.Container checked={checked}>
      <S.Container>
        <S.CheckboxContainer>
          <Checkbox onClick={() => handleTask(id)} checked={checked} />
        </S.CheckboxContainer>

        <S.Details>
          <S.Title>
            <Text variant="textMd">{title}</Text>
          </S.Title>

          <S.Info>
            <CalendarBlank size={18} color="#5c5f62" />
            <Text variant="textSm" color="darkGrey">
              {formattedDueDate ? formattedDueDate : "No due date"}
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
