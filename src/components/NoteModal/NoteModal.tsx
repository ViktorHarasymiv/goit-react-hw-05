import NoteForm from "../NoteForm/NoteForm";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import css from "./NoteModal.module.css";

interface NoteModalProps {
  onClose: () => void;
}

export default function NoteModal({ onClose }: NoteModalProps) {
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const backdropClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", backdropClose);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", backdropClose);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <NoteForm onClose={onClose}></NoteForm>
      </div>
    </div>,
    document.body
  );
}
