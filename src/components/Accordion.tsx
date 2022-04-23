import React, { ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const AccordionContainer = styled.div<{ height: number }>`
  border: 0.5px solid;
  height: ${(prpps) => prpps.height}px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const AccordionTitle = styled.div`
  padding: 0 1rem;
  border-bottom: 0.5px solid;
  border-collapse: collapse;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
    background-color: #f5f7f6;
  }
`;

export default function AccordionItem({
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
      data-testId={"accordion-container"}
      key={title}
      height={show ? contentHeight + titleHeight : titleHeight + 1}
    >
      <AccordionTitle
        data-testId={"accordion-title"}
        ref={titleRef}
        onClick={() => setShow()}
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
