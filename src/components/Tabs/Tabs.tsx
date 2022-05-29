import React, { Dispatch, SetStateAction } from "react";
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
  onChange: Dispatch<SetStateAction<number>>;
}) {
  const mappedItems = items.map((item, index) => {
    return (
      <Tab
        activeButtonStyles={{ ...buttonStyles, ...activeButtonStyles }}
        buttonStyles={buttonStyles}
        active={value === index}
        fullWidth
        onClick={() => onChange(index)}
        label={item}
      />
    );
  });
  return <StyledTabs data-testid="tabs">{mappedItems}</StyledTabs>;
}
