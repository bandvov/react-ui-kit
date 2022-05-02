import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../CONSTANTS";

const AccordionContainer = styled.div<{ show: boolean; height: number }>`
  border: 0.5px solid;
  height: ${(prpps) => prpps.height}px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  margin: ${(props) => (props.show ? "5px 0" : "1px 0")};
`;

const AccordionTitle = styled.div<{ show: boolean }>`
  background-color: ${(props) => (props.show ? "#f5f7f6" : "")};
  padding: 0 1rem;
  border-bottom: 0.5px solid;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #f5f7f6;
  }
`;

export default function Accordion({
  show,
  setShow,
  title,
  children,
}: {
  show: boolean;
  setShow: () => void;
  title: string;
  children: string | ReactElement;
}): ReactElement {
  const [titleHeight, setTitleHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      setTitleHeight(titleRef.current.clientHeight);
    }
  }, [titleRef]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [contentRef]);

  return (
    <AccordionContainer
      show={show}
      data-testId={"accordion-container"}
      key={title}
      height={show ? contentHeight + titleHeight : titleHeight}
    >
      <AccordionTitle
        show={show}
        aria-expanded="true"
        aria-controls="sect1"
        tabIndex={0}
        data-testId={"accordion-title"}
        id="sect1"
        role="region"
        ref={titleRef}
        onClick={() => setShow()}
        onKeyDown={(e): void => {
          if (e.code === "Space" || e.code === "Enter") {
            setShow();
          }
        }}
      >
        {title}
        {show ? (
          <span style={{ fontSize: "32px" }}>&#8722;</span>
        ) : (
          <span style={{ fontSize: "32px" }}>&#43;</span>
        )}
      </AccordionTitle>
      <div data-testId={"accordion-content"} ref={contentRef}>
        {children}
      </div>
    </AccordionContainer>
  );
}
