import React, { ReactElement, useEffect, useRef, useState } from "react";

export default function AccordionItem({
  show,
  setShow,
  title,
  children,
}: {
  show: boolean;
  setShow: ()=> void;
  title: string;
  children: string | ReactElement;
}): ReactElement {
  const [titleHeight, setTitleHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const titleRef = useRef<any>(null);
  const contentRef = useRef<any>(null);

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
    <div
      key={title}
      style={{
        height: show ? contentHeight + 16 + "px" : titleHeight + 3 + "px",
        overflow: "hidden",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h4
        ref={titleRef}
        onClick={() => setShow()}
        style={{
          paddingLeft: "1rem",
          border: "1px solid",
          margin: "0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}
        {show ? (
          <span style={{ marginRight: "1rem", fontSize: "32px" }}>&#8722;</span>
        ) : (
          <span style={{ marginRight: "1rem", fontSize: "32px" }}>&#43;</span>
        )}
      </h4>
      <div>
        <div ref={contentRef} style={{ padding: `1rem` }}>
          {children}
        </div>
      </div>
    </div>
  );
}
