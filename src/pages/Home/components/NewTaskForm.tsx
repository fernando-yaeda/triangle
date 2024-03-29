import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  ErrorText,
  Form,
  Input,
  InputContainer,
  Label,
  MultipleInputsContainer,
  MultipleInputsErrors,
} from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import { useToken } from "../../../hooks/useToken";
import taskService, { CreateTaskParams } from "../../../services/taskService";

const newTaskFormSchema = z
  .object({
    title: z.string().nonempty("Task title should not be empty"),
    description: z
      .string()
      .optional()
      .transform((value) => (value === "" ? null : value)),
    dueDate: z
      .string()
      .optional()
      .transform((value) => (value === "" ? null : value)),
    dueTime: z
      .string()
      .optional()
      .transform((value) => (value === "" ? null : value)),
  })
  .refine(
    (schema) =>
      schema.dueTime === null && schema.dueDate !== null ? false : true,
    {
      message: "Can't add due date if due time is not specified",
      path: ["dueDate"],
    }
  )
  .refine(
    (schema) =>
      schema.dueDate === null && schema.dueTime !== null ? false : true,
    {
      message: "Can't add due time if due date is not specified",
      path: ["dueTime"],
    }
  );

export type NewTaskFormdata = z.infer<typeof newTaskFormSchema>;

type NewTaskFormProps = {
  closeModal: () => void;
};

export default function NewTaskForm({ closeModal }: NewTaskFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewTaskFormdata>({
    resolver: zodResolver(newTaskFormSchema),
  });
  const token = useToken();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (createTaskBody: CreateTaskParams) => {
      return await taskService.create(createTaskBody, token);
    },
    onSuccess: () => {
      toast.success("You have successfully created a new task!");
      queryClient.invalidateQueries(["tasks-list"]);
      closeModal();
    },
    onError: (errors: any) => {
      if (errors?.response?.data?.message) {
        return toast.error(errors.response.data.message);
      }
      toast.error("Oops... something went wrong. Please try again later");
    },
  });

  const handleSubmitData = async (data: NewTaskFormdata) => {
    console.log("s");
    let sanitizedDueDate: string | null = null;
    if (data.dueDate && data.dueTime) {
      sanitizedDueDate = dayjs(data.dueDate + data.dueTime).toISOString();
    }

    const createTaskBody: CreateTaskParams = {
      title: data.title,
      description: data.description ?? null,
      dueDate: sanitizedDueDate,
    };

    mutation.mutate(createTaskBody);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitData)}>
      <Label>Task Title</Label>
      <Input {...register("title")} placeholder="Insert the task title" />
      {errors.title && <ErrorText>• {errors.title.message}</ErrorText>}

      <Label>Description</Label>
      <Input
        {...register("description")}
        placeholder="Insert a task description"
      />

      <MultipleInputsContainer>
        <InputContainer>
          <Label>Due Date</Label>
          <Input {...register("dueDate")} type="date" />
        </InputContainer>

        <InputContainer>
          <Label>Due Time</Label>
          <Input {...register("dueTime")} type="time" />
        </InputContainer>
      </MultipleInputsContainer>
      {(errors.dueTime || errors.dueDate) && (
        <MultipleInputsErrors>
          {errors.dueDate && <ErrorText>• {errors.dueDate.message}</ErrorText>}
          {errors.dueTime && <ErrorText>• {errors.dueTime.message}</ErrorText>}
        </MultipleInputsErrors>
      )}
      <Button
        type="submit"
        width="100%"
        disabled={isSubmitSuccessful}
        variant="blackAndWhite"
      >
        Create
      </Button>
    </Form>
  );
}
