import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../CONSTANTS";
import { IBadge } from "../../types";

const StyledBadge = styled.div<IBadge>`
  z-index: 111111;
  position: absolute;
  background-color: ${(props) => props.background || COLORS.green};
  width: max-content;
  padding: 2px 8px;
  border-radius: ${(props) => props.borderRadius || "13px"};

  color: ${(props) => props.color || "white"};
  outline: 1px solid white;
  border: ${(props) => props.border || "1px solid white"};
  :hover {
    ${(props) =>
      props.onClick
        ? css`
            cursor: pointer;
          `
        : ""};
  }
  ${(props) => {
    if (props.position === "bottom") {
      return css`
        left: calc(100% - 10px);
        bottom: -45%;
      `;
    } else {
      return css`
        left: calc(100% - 10px);
        top: -45%;
      `;
    }
  }}
  ${(props) => {
    if (!props.children) {
      if (props.position === "bottom") {
        return css`
          height: 10px;
          width: 10px;
          border-radius: 50%;
          padding: 0;
          bottom: 0;
          right: -5px;
        `;
      } else {
        return css`
          height: 10px;
          width: 10px;
          border-radius: 50%;
          padding: 0;
          top: 0;
          right: -5px;
        `;
      }
    }
  }}
`;

const Badge: FC<IBadge> = ({
  children,
  className,
  label,
  ...props
}): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: "max-content",
      }}
    >
      <StyledBadge data-testId="badge" className={className} {...props}>
        {label}
      </StyledBadge>
      {children}
    </div>
  );
};
export default Badge;
