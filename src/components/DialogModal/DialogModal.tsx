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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-left: 0.5rem;
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
          top: -100vh;
        `}

  @media ${device.tablet} {
    width: 50%;
    margin: auto;
  }
  @media ${device.laptop} {
    width: 30%;
    margin: auto;
  }
`;
export default function DialogModal({
  header,
  body,
  footer,
  open,
  onClick,
}: {
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
  onClick: (status: boolean) => void;
  open: boolean;
}) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [offsetleft, setOffsetLeft] = useState(0);

  useEffect(() => {
    if (modalRef.current) {
      setOffsetTop(modalRef.current.scrollHeight / 2);
      setOffsetLeft(modalRef.current.scrollWidth / 2);
      modalRef.current.addEventListener("transitionstart", (): void => {
        console.log("transition start");

        if (open) {
          setShowBackdrop(true);
        }
      });
    }
  }, [open]);

  return (
    <>
      <Backdrop open={showBackdrop} setOpen={onClick} />
      <StyledDialogModal
        fade={open}
        onClick={(e) => {
          e.stopPropagation();
        }}
        ref={modalRef}
        offsetTop={offsetTop}
        offsetLeft={offsetleft}
        onTransitionEnd={(e) => {
          if (!open) {
            onClick(false);
            setShowBackdrop(false);
          }
        }}
      >
        <div
          style={{
            border: "1px solid",
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            lineHeight: "26px",
          }}
        >
          {header}
          <Button
            border="none"
            padding="1px 6px"
            fontSize="24px"
            onClick={() => onClick(false)}
            variant="default-outlined"
          >
            &times;
          </Button>
        </div>
        <div
          style={{
            maxHeight: "50vh",
            overflowY: "auto",
            border: "1px solid",
            margin: "1rem 0",
          }}
        >
          {body}
        </div>
        <div>{footer}</div>
      </StyledDialogModal>
    </>
  );
}
