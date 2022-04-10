import React, { useState, ReactElement } from "react";
import Accordion from "./components/Accordion";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import { COLORS } from "./CONSTANTS";

interface DropdownItem {
  id: number;
  title: string;
  selected: boolean;
  url?: string;
}
const accordionItems: { title: string; content: string | ReactElement }[] = [
  {
    title: "one",
    content: `bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bl
      a bla bla bla bla bla bla 
      a bla bla bla bla bla bla 
      a bla bla bla bla bla bla 
      a bla bla bla bla bla bla 
      a bla bla bla bla bla bla 
      bla bla bla bla bla`,
  },
  {
    title: "two",
    content: "bla bla bla bla blaa bla bla bla bla bla bla bla bla bla bla",
  },
  {
    title: "three",
    content:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
  {
    title: "four",
    content:
      "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  },
];

const dropdownItems: DropdownItem[] = [
  {
    id: 0,
    title: "New York",
    selected: false,
    url: "http://www.google.com",
  },
  {
    id: 1,
    title: "Dublin",
    selected: false,
  },
  {
    id: 2,
    title: "California",
    selected: false,
  },
  {
    id: 3,
    title: "Istanbul",
    selected: false,
  },
  {
    id: 4,
    title: "Izmir asd das das das d",
    selected: false,
  },
  {
    id: 5,
    title: "Oslo",
    selected: false,
  },
];

function App() {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [items, setItems] = useState<DropdownItem[]>(dropdownItems);

  const dropdownHandler = (id: number): void => {
    const updatedItems = items.map((item) => {
      item.selected = false;
      if (item.id === id) {
        item.selected = !item.selected;
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        margin: "1rem",
        border: "1px solid",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexWrap: "wrap",
        padding: "1rem",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "auto",
          padding: "1rem",
          border: "1px solid",
          gap: "20px",
          display: "flex",
          flexWrap: "wrap",
          flex: "1 0 auto",
        }}
      >
        <Button variant="success">{"success"}</Button>
        <Button variant={"danger"}>{"danger"}</Button>
        <Button variant={"error"}>{"error"}</Button>

        <Button variant={"success-outlined"}>{"success outlined"}</Button>
        <Button variant={"danger-outlined"}>{"danger outlined"}</Button>
        <Button variant={"error-outlined"}>{"error outlined"}</Button>
        <Button variant={"default-outlined"}>{"default outlined"}</Button>

        <Button disabled borderRadius="30px/30px">
          {"headsdasdo"}
        </Button>

        <Button borderRadius="20px/20px">
          <span>Button</span>
        </Button>
        <Button icon={<div>&copy;</div>}>
          <span>test button</span>
        </Button>
        <Button iconLeft={<div>&larr;</div>}>
          <span>test button</span>
        </Button>
      </div>
      <div
        style={{
          width: "auto",
          padding: "1rem",
          border: "1px solid",
          gap: "20px",
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        <Badge label={5}>
          <Button rounded>&copy;</Button>
        </Badge>
        <Badge label={531}>
          <Button>&copy;</Button>
        </Badge>
        <Badge label={53} background="red">
          <Button rounded variant={"success"}>
            &copy;
          </Button>
        </Badge>
        <Badge onClick={() => alert("click on badge")} label={5}>
          <Button>large</Button>
        </Badge>
        <Badge position={"bottom"} label={5}>
          <Button rounded>&copy;</Button>
        </Badge>
        <Badge>
          <Button rounded>&copy;</Button>
        </Badge>
      </div>
      <div
        style={{
          width: "auto",
          padding: "1rem",
          border: "1px solid",
          gap: "20px",
          display: "flex",
          flexWrap: "wrap",
          flex: "1 0 100%",
        }}
      >
        <Checkbox
          disabled
          checked={checked}
          handler={() => {
            console.log("click");
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          checked={checked}
          handler={() => {
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          disabled
          variant={"toggle"}
          checked={checked}
          handler={() => {
            setChecked(!checked);
          }}
        />
        <Checkbox
          variant={"toggle"}
          checked={checked}
          handler={() => {
            setChecked(!checked);
          }}
        />
      </div>
      <div
        style={{
          width: "auto",
          padding: "1rem",
          border: "1px solid",
          gap: "20px",
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        <div>
          {accordionItems.map((item, index) => {
            return (
              <div key={item.title}>
                <Accordion
                  show={show === index}
                  setShow={() => {
                    if (show === index) {
                      setShow(null);
                    } else {
                      setShow(index);
                    }
                  }}
                  title={item.title}
                >
                  {item.content}
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{
          width: "auto",
          padding: "1rem",
          border: "1px solid",
          gap: "20px",
          display: "flex",
          flexWrap: "wrap",
          flex: 1,
        }}
      >
        <Dropdown
          isOpen={openDropdown}
          title={"Location"}
          toggle={() => setOpenDropdown(!openDropdown)}
        >
          {items.map((item: DropdownItem) => {
            return (
              <div
                tabIndex={0}
                onClick={() => {
                  setOpenDropdown(false);
                  dropdownHandler(item.id);
                }}
                style={{
                  backgroundColor: item.selected ? COLORS.Blue : "white",
                  color: item.selected ? "white" : "black",
                  borderBottom: "0.5px solid",
                  display: "flex",
                  justifyContent: "stretch",
                }}
              >
                <span style={{ padding: "0.2rem .5rem" }}>{item.title}</span>
              </div>
            );
          })}
        </Dropdown>
      </div>
    </div>
  );
}

export default App;
