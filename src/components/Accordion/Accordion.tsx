import React, { ReactElement, useState } from "react";
import AccordionItem from "./AccordionItem";

export default function Accordion({
  items,
  buttonStyles,
}: {
  buttonStyles?: { [key: string]: string };
  items: { title: string; content: string | ReactElement }[];
}) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <ul style={{ listStyle: "none", margin: "none", padding: "0" }}>
      {items.map((item, index) => {
        return (
          <AccordionItem
            buttonStyles={buttonStyles}
            key={item.title}
            active={active === index}
            onToggle={() => {
              if (active === index) {
                setActive(null);
              } else {
                setActive(index);
              }
            }}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </ul>
  );
}
