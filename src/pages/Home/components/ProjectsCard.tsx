import { Plus } from "@phosphor-icons/react";
import { useState } from "react";
import styled from "styled-components";
import ProjectsImage from "../../../assets/projects.png";
import { Card } from "../../../components/Main/Card";
import { Text } from "../../../components/Text";
import { ProjectModal } from "./ProjectModal";

interface ProjectsCardProps {
  projects?: string;
}

export function ProjectsCard({ projects }: ProjectsCardProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Card
      title="Projects"
      subtitle="Projects with assigned tasks"
      buttonIcon={<Plus size={20} />}
      buttonText="Project"
      buttonOnClick={() => setIsModalOpen(true)}
    >
      <ProjectModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
      {projects ? (
        <div>{projects}</div>
      ) : (
        <>
          <Image src={ProjectsImage} alt="projects" />
          <Text variant="headingSm">No projects found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add{" "}
            <span onClick={() => setIsModalOpen(true)}>New Project</span>
          </Text>
        </>
      )}
    </Card>
  );
}

const Image = styled.img`
  width: 340px;
  height: auto;
  align-self: center;
  padding: 40px 0;
`;
