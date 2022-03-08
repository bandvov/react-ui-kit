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
  left: 70%;
  top: -40%;
  color: ${(props) => props.color || "white"};
  outline: 1px solid white;
  ${(props)=> {
    if (props.size === "small") {
     return css`font-size:12px; top: -30%; border-radius:  ${props.borderRadius} || "15px"} padding: 2px 5px;`
    }else if (props.size === "large") {
      return css`font-size:20px; top: -50%;`
    }
  }}
  border:${(props)=> props.border || "1px solid white"};
  :hover {
   ${(props)=> props.onClick ? css`cursor:pointer`:"" }; 
  }
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
