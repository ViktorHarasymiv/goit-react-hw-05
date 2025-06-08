import NoteForm from "../NoteForm/NoteForm";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import css from "./NoteModal.module.css";

interface ModalProps {
  onCloseModal: () => void;
}

export default function NoteModal({ onCloseModal }: ModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const backdropClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseModal();
      }
    };
    document.addEventListener("keydown", backdropClose);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", backdropClose);
      document.body.style.overflow = "";
    };
  }, [onCloseModal]);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <NoteForm onCloseModal={onCloseModal}></NoteForm>
      </div>
    </div>,
    document.body
  );
}
