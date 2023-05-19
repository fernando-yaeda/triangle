import { DotsThree, PencilSimple, Trash } from "@phosphor-icons/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import { useToken } from "../../../../hooks/useToken";
import taskService from "../../../../services/taskService";
import { Text } from "../../../Text";
import { Dropdown, DropdownItem } from "../../Dropdown";

type TaskOptionsProps = {
  taskId: number;
};

export function TaskOptions({ taskId }: TaskOptionsProps) {
  const token = useToken();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteTask = useMutation({
    mutationFn: async () => {
      setIsLoading(true);
      await taskService.remove(taskId, token);
    },
    onSuccess: () => {
      toast.success("You have successfully deleted a task!");
      queryClient.invalidateQueries(["tasks-list"]);
    },
    onError: (errors: any) => {
      if (errors?.response?.data?.message) {
        return toast.error(errors.response.data.message);
      }
      toast.error("Oops... something went wrong. Please try again later");
    },
    onSettled: () => setIsLoading(false),
  });

  function handleDeleteTask() {
    deleteTask.mutate();
  }

  return (
    <Dropdown
      icon={<DotsThree size={32} weight="bold" />}
      flexAlign="flex-start"
      backgroundColor="none"
    >
      <DropdownItem>
        <PencilSimple size={20} color="#5c5f62" weight="bold" />
        <Text type="p" width="80px" variant="textXs">
          Edit Task
        </Text>
      </DropdownItem>

      <DropdownItem onClick={handleDeleteTask}>
        <Trash size={20} color="#5c5f62" weight="bold" />
        <Text type="p" width="80px" variant="textXs">
          Delete Task
        </Text>
      </DropdownItem>
    </Dropdown>
  );
}
//TODO add disable
