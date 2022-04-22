import React, { useState, ReactElement } from "react";
import Accordion from "./components/Accordion";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import { COLORS } from "./CONSTANTS";
import Pagination from "./components/Pagination";
import { DropdownItem } from "./types";
import Wrapper from "./Wrapper";
import { TextInput, SearchInput } from "./components/Form";

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
    title: "Izmir",
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
  const [openDropdown1, setOpenDropdown1] = useState<boolean>(false);
  const [items, setItems] = useState<DropdownItem[]>(dropdownItems);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const dropdownHandler = (id: number): void => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return item;
    });

    setItems(updatedItems);
  };

  const validate = (value: string) => {
    console.log(/^[0-9\-\+]{9,15}$/.test(value));

    return !/^[0-9\-\+]{9,15}$/.test(value);
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
      <Wrapper>
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
      </Wrapper>
      <Wrapper>
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
      </Wrapper>
      <Wrapper>
        <Checkbox
          disabled
          checked={checked}
          onChange={() => {
            console.log("click");
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          rounded={true}
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          label="a as dasd as"
          disabled
          variant={"toggle"}
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
        <Checkbox
          label="a as dasd as"
          variant={"toggle"}
          checked={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      </Wrapper>
      <Wrapper>
        <div>
          {accordionItems.map((item, index) => {
            return (
              <Accordion
                key={item.title}
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
            );
          })}
        </div>
      </Wrapper>
      <Wrapper>
        <Dropdown
          isOpen={openDropdown}
          title={"Location"}
          setOpen={setOpenDropdown}
        >
          {items.map((item: DropdownItem) => {
            return (
              <div
                tabIndex={0}
                onKeyDown={(e: any) => {
                  if (e.code === "Space" || e.code === "Enter") {
                    setOpenDropdown(false);
                    dropdownHandler(item.id);
                  } else if (e.code === "Escape") {
                    setOpenDropdown(false);
                  }
                }}
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
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          setOpen={setOpenDropdown1}
          position={"top"}
        >
          {items.map((item: DropdownItem) => {
            return (
              <div
                tabIndex={0}
                onKeyDown={(e: any) => {
                  if (e.code === "Space" || e.code === "Enter") {
                    setOpenDropdown1(false);
                    dropdownHandler(item.id);
                  } else if (e.code === "Escape") {
                    setOpenDropdown1(false);
                  }
                }}
                onClick={() => {
                  setOpenDropdown1(false);
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
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          setOpen={setOpenDropdown1}
          position={"left"}
        >
          {items.map((item: DropdownItem) => {
            return (
              <div
                tabIndex={0}
                onKeyDown={(e: any) => {
                  if (e.code === "Space" || e.code === "Enter") {
                    setOpenDropdown1(false);
                    dropdownHandler(item.id);
                  } else if (e.code === "Escape") {
                    setOpenDropdown1(false);
                  }
                }}
                onClick={() => {
                  setOpenDropdown1(false);
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
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          setOpen={setOpenDropdown1}
          position={"right"}
        >
          {items.map((item: DropdownItem) => {
            return (
              <div
                tabIndex={0}
                onKeyDown={(e: any) => {
                  if (e.code === "Space" || e.code === "Enter") {
                    setOpenDropdown1(false);
                    dropdownHandler(item.id);
                  } else if (e.code === "Escape") {
                    setOpenDropdown1(false);
                  }
                }}
                onClick={() => {
                  setOpenDropdown1(false);
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
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          setOpen={setOpenDropdown1}
          fullWidth
        >
          <div>
            <h1>Dropdown</h1>
          </div>
        </Dropdown>
      </Wrapper>
      <Wrapper>
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open new modal
        </Button>
        <Modal open={openModal} setOpen={setOpenModal}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              backgroundColor: "lightblue",
              padding: "3rem",
              border: "5px solid white",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "calc(50vh - 79px)",
              width: "max-content",
            }}
          >
            <h1>Hello</h1>
          </div>
        </Modal>
      </Wrapper>
      <Wrapper>
        <Pagination />
        <Pagination pages={11} />
        <Pagination pages={16} />
      </Wrapper>
      <Wrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("form submited");
          }}
        >
          <TextInput setValue={setValue} value={value} />
          <TextInput setValue={setValue} value={value} />
          <TextInput setValue={setValue} value={value} />
          <TextInput setValue={setValue} value={value} />
          <TextInput
            error={error}
            helperText="Some text"
            setValue={(value) => {
              setValue(value);
              setError(validate(value));
            }}
            value={value}
          />
          <TextInput
            setValue={setValue}
            value={value}
            placeholder="Placeholder"
          />
          <TextInput placeholder="Placeholder" />
          <button type="submit">submit</button>
        </form>
      </Wrapper>
      <Wrapper>
        <SearchInput />
      </Wrapper>
    </div>
  );
}

export default App;
