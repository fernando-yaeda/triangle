import { Divider } from "../../../components/Divider";
import { Modal } from "../../../components/Main/Modal";
import { ModalHeader } from "../../../components/Main/Modal/Header";
import ProjectForm from "./ProjectForm";

type ProjectModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export function ProjectModal({ isOpen, closeModal }: ProjectModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title="Create Project" closeModal={closeModal} />

      <Divider />

      <div style={{ height: "24px" }} />

      <ProjectForm closeModal={closeModal} />
    </Modal>
  );
}
