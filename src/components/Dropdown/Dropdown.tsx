import React, { ReactElement, useRef, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../Button/Button";
import { Position } from "../../types";
import { ReactComponent as ArrowDown } from "../../icons/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../icons/arrow_up.svg";
import { COLORS } from "../../CONSTANTS";

const DropdownButton = styled(Button)`
  svg line {
    stroke: ${(props) => props.color};
  }
`;
const ChildrenContainer = styled.div<{
  offset: number;
  isOpen: boolean;
  position: Position;
  fullWidth: boolean;
}>`
  box-sizing: border-box;
  background-color: white;
  width: ${(props) => (props.fullWidth ? "calc(100% + 3px)" : "max-content")};
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
          left: calc(-${props.offset / 2 + 1 + "px"} + 50%);
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
      case "left-top":
        return css`
          bottom: 40px;
          left: 0;
        `;
      case "right-top":
        return css`
          bottom: 40px;
          right: 0;
        `;
      case "left-bottom":
        return css`
          top: 40px;
          left: 0;
        `;
      case "right-bottom":
        return css`
          top: 40px;
          right: 0;
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
  onClick = () => {},
  onKeyDown = () => {},
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  position = "bottom",
  buttonStyles = {},
  fullWidth = false,
  ...props
}: {
  buttonStyles?: {
    [key: string]: string;
  };
  position?: Position;
  onClick?: (status: boolean) => void;
  onKeyDown?: (status: boolean) => void;
  onMouseEnter?: (status: boolean) => void;
  onMouseLeave?: (status: boolean) => void;
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
        closeHandler();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    document.addEventListener("keydown", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
      document.removeEventListener("keydown", handleClickOutside, true);
    };
  }, [onClick, onMouseEnter, onMouseLeave]);

  useEffect(() => {
    if (childrenRef.current) {
      setOffsetHeight(childrenRef.current.scrollHeight);
      setOffsetWidth(childrenRef.current.clientWidth);
    }
  }, [childrenRef, title]);

  function escapeHandler(e: KeyboardEvent): void {
    if (e.code === "Escape") {
      onKeyDown(!isOpen);
    }
  }
  function closeHandler(): void {
    if (onClick) {
      onClick(false);
    }
    if (onMouseEnter) {
      onMouseEnter(false);
    }
    if (onMouseLeave) {
      onMouseLeave(false);
    }
    if (onKeyDown) {
      onKeyDown(false);
    }
  }
  return (
    <div
      tabIndex={-1}
      ref={ref}
      style={{
        position: "relative",
      }}
      {...props}
    >
      <DropdownButton
        color={COLORS.Blue}
        aria-expanded={isOpen}
        fullWidth={fullWidth}
        backgroundColor="white"
        variant={"default-outlined"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          ...buttonStyles,
        }}
        onClick={() => {
          onClick(!isOpen);
        }}
        onMouseEnter={() => {
          onMouseEnter(!isOpen);
        }}
        onMouseLeave={() => {
          onMouseLeave(!isOpen);
        }}
        onKeyDown={escapeHandler}
      >
        {title}
        {isOpen ? (
          <ArrowUp width={10} height={10} style={{ margin: "auto 0" }} />
        ) : (
          <ArrowDown width={10} height={10} style={{ margin: "auto 0" }} />
        )}
      </DropdownButton>
      <ChildrenContainer
        data-testId="children"
        offset={
          position === "left" || position === "right"
            ? offsetHeight
            : offsetWidth
        }
        ref={childrenRef}
        isOpen={isOpen}
        position={position}
        fullWidth={fullWidth}
        tabIndex={-1}
      >
        {children}
      </ChildrenContainer>
    </div>
  );
}
