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
  if (props.variant === STATUS.success) {
    return css`
      background-color: ${COLORS.green};
      color: ${props.color || "white"};
    `;
  } else if (props.variant === STATUS.successOutlined) {
    return css`
      background-color: transparent;
      color: ${props.color || COLORS.green};
      outline: ${props.border || "1px solid" + COLORS.green};
    `;
  } else if (props.variant === STATUS.dangerOutlined) {
    return css`
      background-color: transparent;
      color: ${props.color || COLORS.orange};
      outline: ${props.border || "1px solid" + COLORS.orange};
    `;
  } else if (props.variant === STATUS.errorOutlined) {
    return css`
      background-color: transparent;
      color: ${props.color || COLORS.red};
      outline: ${props.border || "1px solid" + COLORS.red};
    `;
  } else if (props.variant === STATUS.defaultOutlined) {
    return css`
      background-color: transparent;
      color: ${props.color || COLORS.Blue};
      outline: ${props.border || "1px solid" + COLORS.Blue};
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
  } else if (props.disabled) {
    return css`
      background-color: ${COLORS.lightgrey};
      color: ${props.color || COLORS.gray};
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

padding:  ${(props) => (props.padding ? props.padding : ".75rem 1rem")};
font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
width: ${(props) => (props.fullWidth ? "100%" : "max-content")}; 

:hover{
  cursor:${(props) => (props.disabled ? "not-allowed" : "pointer")};
}
}`;

const Button: FC<IButton> = ({
  children,
  icon,
  iconLeft,
  ...props
}): ReactElement => {
  return (
    <StyledButton {...props}>
      {iconLeft}
      {children}
      {icon}
    </StyledButton>
  );
};

export default Button;
