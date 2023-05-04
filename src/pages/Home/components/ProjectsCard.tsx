import { Plus } from "@phosphor-icons/react";
import styled from "styled-components";
import ProjectsImage from "../../../assets/projects.png";
import { Card } from "../../../components/Main/Card";
import { Text } from "../../../components/Text";

interface ProjectsCardProps {
  projects?: string;
}

export function ProjectsCard({ projects }: ProjectsCardProps) {
  return (
    <Card
      title="Projects"
      subtitle="Projects with assigned tasks"
      buttonIcon={<Plus size={20} />}
      buttonText="Project"
    >
      {projects ? (
        <div>{projects}</div>
      ) : (
        <>
          <Image src={ProjectsImage} alt="projects" />
          <Text variant="headingSm">No projects found</Text>
          <Text variant="textSmRegular" color="darkGrey">
            Click to add New Project
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
