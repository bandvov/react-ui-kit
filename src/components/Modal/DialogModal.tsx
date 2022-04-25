import React, { useState, ReactElement, useRef, useEffect } from "react";
import styled from "styled-components";
import { device } from "../../CONSTANTS";
import Button from "../Button/Button";
import Modal from "./Modal";

const StyledDialogModal = styled.div<{ offset: number }>`
  position: relative;
  margin: auto;
  margin-top: calc(50vh - ${(props) => props.offset}px);
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: white;
  padding: 1rem;

  @media ${device.tablet} {
    width: 50%;
  }
  @media ${device.laptop} {
    width: 30%;
  }
`;
export default function DialogModal({
  header,
  body,
  footer,
  open = false,
  onClick,
}: {
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
  onClick: (status: boolean) => void;
  open: boolean;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef);

      setOffset(modalRef.current.scrollHeight / 2);
    }
  }, [open]);

  return (
    <Modal open={open} setOpen={onClick}>
      <>
        {open && (
          <StyledDialogModal
            onClick={(e) => {
              e.stopPropagation();
            }}
            ref={modalRef}
            offset={offset}
          >
            <Button
              padding="2px 8px"
              fontSize="24px"
              onClick={() => onClick(false)}
              style={{
                position: "absolute",
                right: "-1rem",
                top: "-1rem",
                backgroundColor: "white",
              }}
              rounded
              variant="default-outlined"
            >
              &times;
            </Button>
            <div style={{ border: "1px solid" }}>{header}</div>
            <div style={{ border: "1px solid", margin: "1rem 0" }}>{body}</div>
            <div>{footer}</div>
          </StyledDialogModal>
        )}
      </>
    </Modal>
  );
}
