import React, { ReactElement, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "../components/Button";
import { Position } from "../types";

const iconPath = process.env.PUBLIC_URL + "/icons/";

const ChildrenContainer = styled.div<{ isOpen: boolean; position: Position }>`
  width: max-content;
  ${(props) => {
    switch (props.position) {
      case "bottom":
        return css`
          top: 50px;
          left: calc(50% - 90px);
          box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.1),
            0 0 0 2px rgb(255, 255, 255), 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
        `;
      case "top":
        return css`
          bottom: 50px;
          left: calc(50% - 90px);
          box-shadow: 0 -0.5em 1em rgba(0, 0, 0, 0.1),
            0 0 0 2px rgb(255, 255, 255), 0.1em 0.1em 0.5em rgba(0, 0, 0, 0.3);
        `;

      default:
        break;
    }
  }}
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.2s ease-in-out;
  height: ${(props) => (props.isOpen ? "" : 0)};
  position: absolute;
`;

export default function Dropdown({
  isOpen,
  title,
  children,
  setOpen,
  position = "bottom",
}: {
  position?: Position;
  setOpen: (status: boolean) => void;
  isOpen: boolean;
  title: string;
  children: ReactElement | ReactElement[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [setOpen]);

  const iconName = isOpen ? "arrow_down.svg" : "arrow_up.svg";

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
      }}
    >
      <Button
        variant={"default-outlined"}
        style={{
          margin: "auto",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
        onClick={() => {
          setOpen(!isOpen);
        }}
        onKeyDown={(e: any) => {
          if (e.code === "Escape") {
            setOpen(!isOpen);
          }
        }}
      >
        {title}{" "}
        <img
          style={{ margin: "auto" }}
          width={10}
          height={10}
          src={iconPath + iconName}
        />
      </Button>
      <ChildrenContainer isOpen={isOpen} position={position}>
        {children}
      </ChildrenContainer>
    </div>
  );
}
