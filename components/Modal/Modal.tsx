"use client";

import { createPortal } from "react-dom";
import { MouseEvent, ReactNode, useEffect } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
  title: string;
  children?: ReactNode;
}

export default function Modal({ onClose, title, children }: ModalProps) {
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modalContent}>
        <button
          className={css.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <use href="/sprite.svg#icon-close" />
          </svg>
        </button>

        <div className={css.content}>
          <h2 className={css.title}>{title}</h2>
          {children && <div className={css.text}>{children}</div>}
        </div>

        <button type="button" className={css.modalButton} onClick={onClose}>
          Great!
        </button>
      </div>
    </div>,
    document.body
  );
}
