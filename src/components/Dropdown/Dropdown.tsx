import React, { ReactElement, useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../Button/Button";
import { Position } from "../../types";

const iconPath = process.env.PUBLIC_URL + "/icons/";

const ChildrenContainer = styled.div<{
  offset: number;
  isOpen: boolean;
  position: Position;
  fullWidth: boolean;
}>`
  background-color: white;
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  ${(props) => {
    switch (props.position) {
      case "bottom":
        return css`
          top: 40px;
          left: calc(-${props.offset / 2 + "px"} + 50%);
        `;
      case "top":
        return css`
          bottom: 40px;
          left: calc(-${props.offset / 2 + "px"} + 50%);
        `;
      case "left":
        return css`
          top: calc(-${props.offset / 2 + "px"} + 50%);
          right: calc(100% + 10px);
        `;
      case "right":
        return css`
          top: calc(-${props.offset / 2 + "px"} + 50%);
          left: calc(100% + 10px);
        `;
      default:
        break;
    }
  }}
  overflow: ${(props) => (props.isOpen ? "" : "hidden")};
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
  buttonStyles,
  fullWidth = false,
  ...props
}: {
  buttonStyles?: {
    [key: string]: string;
  };
  position?: Position;
  setOpen: (status: boolean) => void;
  isOpen: boolean;
  title: string;
  children: ReactElement | ReactElement[];
  fullWidth?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [offsetHeight, setOffsetHeight] = useState<number>(0);
  const [offsetWidth, setOffsetWidth] = useState<number>(0);

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

  useEffect(() => {
    if (childrenRef.current) {
      setOffsetHeight(childrenRef.current.scrollHeight);
      setOffsetWidth(childrenRef.current.clientWidth);
    }
  }, [childrenRef]);

  const iconName = isOpen ? "arrow_down.svg" : "arrow_up.svg";

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width: fullWidth ? "100%" : "max-content",
      }}
      {...props}
    >
      <Button
        fullWidth
        backgroundColor="white"
        variant={"default-outlined"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          ...(buttonStyles || {}),
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
          style={{ marginTop: "auto", marginBottom: "auto" }}
          width={10}
          height={10}
          src={iconPath + iconName}
        />
      </Button>
      <ChildrenContainer
        offset={
          position === "left" || position === "right"
            ? offsetHeight
            : offsetWidth
        }
        ref={childrenRef}
        isOpen={isOpen}
        position={position}
        fullWidth={fullWidth}
      >
        {children}
      </ChildrenContainer>
    </div>
  );
}
