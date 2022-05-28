import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  border: 1px solid red;
  list-style: none;
  width: 100%;
  > li {
    border: 1px solid green;
    padding: 0;
  }
  > li:hover {
    background-color: aliceblue;
  }
`;
export default function List({
  children,
  ...props
}: {
  children: ReactElement[];
}) {
  return (
    <StyledList {...props}>
      {children.map((item) => {
        return <li>{item}</li>;
      })}
    </StyledList>
  );
}
