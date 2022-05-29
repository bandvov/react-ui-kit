import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import styled from "styled-components";
import Tab from "./Tab";

const StyledTabs = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;
export default function Tabs({
  value,
  onChange,
  items,
  buttonStyles = {},
  activeButtonStyles = {},
}: {
  items: string[];
  buttonStyles?: { [key: string]: string };
  activeButtonStyles?: { [key: string]: string };
  value: string | number;
  onChange: Dispatch<SetStateAction<string>>;
}) {
  const mappedItems = items.map((item) => {
    return (
      <Tab
        activeButtonStyles={{ ...buttonStyles, ...activeButtonStyles }}
        buttonStyles={buttonStyles}
        value={value}
        fullWidth
        onClick={() => onChange(item)}
        label={item}
      />
    );
  });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <StyledTabs>{mappedItems}</StyledTabs>
    </div>
  );
}
