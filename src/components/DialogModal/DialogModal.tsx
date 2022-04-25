import React, { useState, ReactElement, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { device } from "../../CONSTANTS";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

const StyledDialogModal = styled.div<{
  fade: boolean | null;
  offsetTop: number;
  offsetLeft: number;
}>`
  z-index: 101;
  position: fixed;

  display: flex;
  flex-direction: column;
  width: auto;
  margin: auto;
  background-color: white;
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  left: calc(50vw - ${(props) => props.offsetLeft}px);
  ${(props) =>
    props.fade
      ? css`
          top: calc(50vh - ${props.offsetTop}px);
        `
      : css`
          top: -50vh;
        `}

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
  fade,
  setFade,
}: {
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
  onClick: (status: boolean) => void;
  open: boolean;
  fade: boolean;
  setFade: (status: boolean) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetleft, setOffsetLeft] = useState(0);

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef);

      setOffsetTop(modalRef.current.scrollHeight / 2);
      setOffsetLeft(modalRef.current.scrollWidth / 2);
    }
  }, [open]);

  useEffect(() => {}, [fade]);
  return (
    <>
      <Backdrop open={open} setOpen={setFade} />
      <StyledDialogModal
        fade={fade}
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={modalRef}
        offsetTop={offsetTop}
        offsetLeft={offsetleft}
        onTransitionEnd={(e) => {
          console.log(e);
          if (!fade) {
            onClick(false);
          }
        }}
      >
        <Button
          padding="2px 8px"
          fontSize="24px"
          onClick={() => setFade(false)}
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
    </>
  );
}
