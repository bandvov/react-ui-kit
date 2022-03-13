import React, { FC, ReactElement } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../CONSTANTS";
import { IBadge } from "../types";

const StyledBadge = styled.div<IBadge>`
  position: absolute;
  background-color: ${(props) => props.background || COLORS.green};
  width: max-content;
  padding: 4px 10px;
  border-radius: ${(props) => props.borderRadius || "25px"};
 
  color: ${(props) => props.color || "white"};
  outline: 1px solid white;
  border:${(props)=> props.border || "1px solid white"};
  :hover {
   ${(props)=> props.onClick ? css`cursor:pointer`: "" }; 
  }
  ${(props)=> {
    if (props.position === "bottom") {
      return css` left: 70%; bottom: -40%;`
    } else {
      return css` left: 70%; top: -40%;`
    }
  }}
  ${(props)=> {
    console.log(props)
    if (!props.children) {
      return css`height: 15px; width: 15px; border-radius: 50%; padding:0;top:60%`
    }
  }}
`;

const Badge: FC<IBadge> = ({ children,className, label, ...props }): ReactElement => {
  return (
    <div style={{ position: "relative", width: "max-content" }}>
      <StyledBadge className={className} {...props}>{label}</StyledBadge>
      {children}
    </div>
  );
};
export default Badge;
