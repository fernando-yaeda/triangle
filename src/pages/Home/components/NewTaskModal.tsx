import { Divider } from "../../../components/Divider";
import { Modal } from "../../../components/Main/Modal";
import { ModalHeader } from "../../../components/Main/Modal/Header";
import NewTaskForm from "./NewTaskForm";

type NewTaskModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

export function NewTaskModal({ isOpen, closeModal }: NewTaskModalProps) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader title="Create New Task" closeModal={closeModal} />

      <Divider />

      <div style={{ height: "24px" }} />

      <NewTaskForm closeModal={closeModal} />
    </Modal>
  );
}
