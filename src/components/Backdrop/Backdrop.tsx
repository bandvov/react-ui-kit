import React, { ReactElement, useEffect } from "react";
import styled from "styled-components";

const StyledBackdrop = styled.div`
  padding: 1rem;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function Backdrop({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (status: boolean) => void;
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

  if (!open) return null;

  return (
    <StyledBackdrop
      onClick={() => {
        setOpen(false);
      }}
    />
  );
}
