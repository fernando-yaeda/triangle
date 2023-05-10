import { zodResolver } from "@hookform/resolvers/zod";
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
import taskService from "../../../services/taskService";

const newTaskFormSchema = z
  .object({
    name: z.string().nonempty("Task name should not be empty"),
    description: z
      .string()
      .optional()
      .transform((value) => (value === "" ? undefined : value)),
    dueDate: z
      .string()
      .optional()
      .transform((value) => (value === "" ? undefined : value)),
    dueTime: z
      .string()
      .optional()
      .transform((value) => (value === "" ? undefined : value)),
  })
  .refine(
    (schema) =>
      schema.dueDate === undefined && schema.dueTime !== undefined
        ? false
        : true,
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
    let sanitizedDueDate: Date | undefined = undefined;
    if (data.dueDate) {
      const date = `${data.dueDate}T${
        data.dueTime ? data.dueTime : "00:00"
      }:00Z`;
      sanitizedDueDate = new Date(date);
    }

    const createTaskBody = {
      name: data.name,
      description: data.description ?? undefined,
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
      <Label>Task Name</Label>
      <Input {...register("name")} placeholder="Insert the task name" />
      {errors.name && <ErrorText>• {errors.name.message}</ErrorText>}

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
      {errors.dueTime && (
        <MultipleInputsErrors>
          <ErrorText>• {errors.dueTime.message}</ErrorText>
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
