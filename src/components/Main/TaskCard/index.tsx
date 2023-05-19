import { CalendarBlank, Tag } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { useState } from "react";
import { toast } from "react-toastify";
import { Text } from "../../../components/Text";
import { useToken } from "../../../hooks/useToken";
import taskService from "../../../services/taskService";
import { Checkbox } from "../../Checkbox";
import { TaskOptions } from "./TaskOptions";
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
  const queryClient = useQueryClient();
  let formattedDueDate;

  if (dueDate) {
    formattedDueDate = dayjs(dueDate).format("DD MMM YYYY - h:mm A");
  }

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      return await taskService.updateStatus({ id, status: "DONE" }, token);
    },
    onSuccess: () => {
      toast.success("Card completed successfully");
      queryClient.invalidateQueries(["tasks-list"]);
    },
    onError: (errors: any) => {
      if (errors?.response?.data?.message) {
        return toast.error(errors.response.data.message);
      }
      toast.error("Oops... something went wrong. Please try again later");
    },
  });

  async function handleTask(id: number) {
    setChecked(!checked);

    mutation.mutate(id);
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
        <TaskOptions taskId={id} />
      </S.Container>
    </S.Container>
  );
}
