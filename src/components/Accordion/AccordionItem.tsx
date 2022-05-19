import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../CONSTANTS";
import Button from "../Button/Button";
const iconPath = process.env.PUBLIC_URL + "/icons/";

const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  ${(props) => {
    if (props.isOpen) {
      return css`
        overflow: hidden;
        transition: max-height 0.3s cubic-bezier(1, 0, 1, 0);
        height: auto;
        max-height: 9999px;
      `;
    } else {
      return css`
        max-height: 0;
        transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
      `;
    }
  }}
`;
const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: ReactElement | string;
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const iconName = isOpen ? "arrow_down.svg" : "arrow_up.svg";

  return (
    <div>
      <Button
        borderRadius="0"
        fullWidth
        justify="space-between"
        backgroundColor="transparent"
        border={`1px solid ${COLORS.gray} `}
        style={{
          color: isOpen ? "black" : COLORS.gray,
        }}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        <img
          alt={isOpen ? "arrow up" : "arrowDown"}
          style={{ marginTop: "auto", marginBottom: "auto" }}
          width={10}
          height={10}
          src={iconPath + iconName}
        />
      </Button>
      <AccordionContent isOpen={isOpen}>
        <div>{children}</div>
      </AccordionContent>
    </div>
  );
};

export default Accordion;
