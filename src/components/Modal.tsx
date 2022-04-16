import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

const StyledModal = styled.div<{ open: boolean }>`
  display: ${(prop) => (prop.open ? "block" : "none")};
  padding: 1rem;
  z-index: 111111;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function Modal({
  children,
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (status: boolean) => void;
  children: ReactElement;
}) {
  const setHidden = () => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  useEffect(() => {
    setHidden();
  }, [open]);

  return (
    <StyledModal
      onClick={(e) => {
        setOpen(false);
        e.stopPropagation();
      }}
      open={open}
    >
      {children}
    </StyledModal>
  );
}
