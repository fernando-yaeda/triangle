import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  ErrorText,
  Form,
  Input,
  Label,
} from "../../../components/Auth/Forms/styles";
import { Button } from "../../../components/Button";
import { useToken } from "../../../hooks/useToken";
import projectService, {
  CreateProjectParams,
} from "../../../services/projectService";

const projectFormSchema = z.object({
  title: z.string().nonempty("Project title should not be empty"),
  description: z
    .string()
    .optional()
    .transform((value) => (value === "" ? null : value)),
  members: z
    .string()
    .optional()
    .transform((value) => (value === "" ? null : value)),
});

export type ProjectFormdata = z.infer<typeof projectFormSchema>;

type ProjectFormProps = {
  closeModal: () => void;
};

export default function ProjectForm({ closeModal }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ProjectFormdata>({
    resolver: zodResolver(projectFormSchema),
  });
  const queryClient = useQueryClient();
  const token = useToken();

  const mutation = useMutation({
    mutationFn: async (createProjectBody: CreateProjectParams) => {
      return await projectService.create(createProjectBody, token);
    },
    onSuccess: () => {
      toast.success("You have successfully created a project!");
      queryClient.invalidateQueries(["projects-list"]);
      closeModal();
    },
    onError: (errors: any) => {
      if (errors?.response?.data?.message) {
        return toast.error(errors.response.data.message);
      }
      toast.error("Oops... something went wrong. Please try again later");
    },
  });

  const handleSubmitData = async (data: ProjectFormdata) => {
    const createProjectBody = {
      title: data.title,
      description: data.description ?? null,
    };

    mutation.mutate(createProjectBody);
  };

  return (
    <Form onSubmit={handleSubmit(handleSubmitData)}>
      <Label>Project Title</Label>
      <Input {...register("title")} placeholder="Insert the project title" />
      {errors.title && <ErrorText>• {errors.title.message}</ErrorText>}

      <Label>Description</Label>
      <Input
        {...register("description")}
        placeholder="Insert a project description"
      />

      <Label>Invite Members</Label>
      <Input {...register("members")} placeholder="Insert members to invite" />

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
