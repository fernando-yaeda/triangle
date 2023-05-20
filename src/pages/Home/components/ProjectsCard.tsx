import { Plus } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import ProjectsImage from "../../../assets/projects.png";
import { HorizontalCard } from "../../../components/Main/HorizontalCard";
import { ProjectCard } from "../../../components/Main/ProjectCard";
import { Text } from "../../../components/Text";
import { useToken } from "../../../hooks/useToken";
import projectService from "../../../services/projectService";
import { ProjectModal } from "./ProjectModal";

export function ProjectsCard() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const token = useToken();

  const { data, isSuccess } = useQuery({
    queryKey: ["projects-list"],
    queryFn: () => projectService.getProjects(token),
    onError: (error) => {
      console.log(error);
      toast.error("Error fetching projects");
    },
  });

  return (
    <HorizontalCard
      title="Projects"
      subtitle="Projects with assigned projects"
      buttonIcon={<Plus size={20} />}
      buttonText="Project"
      buttonOnClick={() => setIsModalOpen(true)}
      hasContent={data && data.length > 0 && true}
      style={{ width: "100%" }}
    >
      <ProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      {isSuccess && data && data.length > 0 ? (
        data.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
            />
          );
        })
      ) : (
        <>
          <Image src={ProjectsImage} alt="projects" />
          <Text variant="headingSm">No projects found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add <a onClick={() => setIsModalOpen(true)}>New Project</a>
          </Text>
        </>
      )}
    </HorizontalCard>
  );
}

const Image = styled.img`
  width: 340px;
  height: auto;
  align-self: center;
  padding: 40px 0;
`;
