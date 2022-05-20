import React, { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../CONSTANTS";
import Button from "../Button/Button";
// const iconPath = process.env.PUBLIC_URL + "/icons/";
import { ReactComponent as ArrowDown } from "../../icons/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../icons/arrow_up.svg";

const AccordionTitle = styled(Button)`
  svg line {
    stroke: ${(props) => props.color};
  }
`;
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
  title: ReactElement | string;
  children: ReactElement | string;
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <AccordionTitle
        color={isOpen ? "black" : COLORS.gray}
        borderRadius="0"
        fullWidth
        justify="space-between"
        backgroundColor="transparent"
        border={`1px solid ${COLORS.gray} `}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ArrowUp width={10} height={10} style={{ margin: "auto 0" }} />
        ) : (
          <ArrowDown width={10} height={10} style={{ margin: "auto 0" }} />
        )}
      </AccordionTitle>
      <AccordionContent isOpen={isOpen}>
        <div>{children}</div>
      </AccordionContent>
    </div>
  );
};

export default Accordion;
