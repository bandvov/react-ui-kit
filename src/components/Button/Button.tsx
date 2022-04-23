import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";
import { COLORS, STATUS } from "../../CONSTANTS";
import { IButton } from "../../types";

const StyledButton = styled.button<IButton>`
  display: flex;
  gap: 10px;
  justify-content: ${(props) => props.justify || "center"};
  border: ${(props) => props.border || "none"};
  ${(props) => {
    if (props.disabled) {
      return css`
        background-color: ${COLORS.lightgrey};
        color: ${props.color || COLORS.gray};
      `;
    } else if (props.variant === STATUS.success) {
      return css`
        background-color: ${COLORS.green};
        color: ${props.color || "white"};
      `;
    } else if (props.variant === STATUS.successOutlined) {
      return css`
        background-color: transparent;
        color: ${props.color || COLORS.green};
        outline: ${props.border || "1px solid " + COLORS.green};
      `;
    } else if (props.variant === STATUS.dangerOutlined) {
      return css`
        background-color: transparent;
        color: ${props.color || COLORS.orange};
        outline: ${props.border || "1px solid " + COLORS.orange};
      `;
    } else if (props.variant === STATUS.errorOutlined) {
      return css`
        background-color: transparent;
        color: ${props.color || COLORS.red};
        outline: ${props.border || "1px solid " + COLORS.red};
      `;
    } else if (props.variant === STATUS.defaultOutlined) {
      return css`
        background-color: transparent;
        color: ${props.color || COLORS.Blue};
        outline: ${props.border || "1px solid " + COLORS.Blue};
      `;
    } else if (props.variant === STATUS.danger) {
      return css`
        background-color: ${COLORS.orange};
        color: ${props.color || "white"};
      `;
    } else if (props.variant === STATUS.error) {
      return css`
        background-color: ${COLORS.red};
        color: ${props.color || "white"};
      `;
    } else {
      return css`
        background-color: ${COLORS.Blue};
        color: ${props.color || "white"};
      `;
    }
  }};

  border-radius: ${(props) =>
    props.rounded
      ? "50%"
      : props.borderRadius && !props.rounded
      ? props.borderRadius
      : "5px"};

  padding: ${(props) =>
    props.padding
      ? props.padding
      : props.rounded
      ? ".5rem .7rem"
      : ".5rem 1rem"};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  background-color: ${(props) => props.backgroundColor || ""};
  :hover {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
  :focus {
    ${(props) => {
      if (
        props.variant === STATUS.successOutlined ||
        props.variant === STATUS.dangerOutlined ||
        props.variant === STATUS.errorOutlined ||
        props.variant === STATUS.defaultOutlined
      ) {
        return css`
          outline: 2px solid black;
        `;
      }
    }}
  }
`;

const Button: FC<IButton> = ({
  children,
  icon,
  iconLeft,
  type = "button",
  ...props
}): ReactElement => {
  return (
    <StyledButton {...props} type={type}>
      {iconLeft}
      {children}
      {icon}
    </StyledButton>
  );
};

export default Button;
