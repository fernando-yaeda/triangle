import { zodResolver } from "@hookform/resolvers/zod";
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
    formState: { errors, isSubmitting },
  } = useForm<NewTaskFormdata>({
    resolver: zodResolver(newTaskFormSchema),
  });
  const token = useToken();

  const handleSubmitData = async (data: NewTaskFormdata) => {
    let sanitizedDueDate: string | null = null;
    if (data.dueDate && data.dueTime) {
      sanitizedDueDate = dayjs(data.dueDate + data.dueTime).toISOString();
    }

    const createTaskBody: CreateTaskParams = {
      title: data.title,
      description: data.description ?? null,
      dueDate: sanitizedDueDate,
    };

    try {
      await taskService.create(createTaskBody, token);
      toast.success("You have successfully created a new task!");
      closeModal();
    } catch (error: any) {
      if (error?.response?.data?.message) {
        return toast.error(error.response.data.message);
      }
      return toast.error(
        "Oops... something went wrong. Please try again later"
      );
    }
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
      {isSubmitting ? (
        <Button
          width="100%"
          type="submit"
          disabled={true}
          variant="whiteAndGrey"
        >
          Create
        </Button>
      ) : (
        <Button width="100%" type="submit">
          Create
        </Button>
      )}
    </Form>
  );
}
