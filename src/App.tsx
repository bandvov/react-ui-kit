import React, { useState, ReactElement } from "react";
import {
  Accordion,
  Badge,
  Button,
  Checkbox,
  Pagination,
  Dropdown,
  Backdrop,
  TextInput,
  DialogModal,
} from "./components";
import { COLORS } from "./CONSTANTS";
import { DropdownItem } from "./types";
import Wrapper from "./Wrapper";

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
  const [openInnerDropdown, setOpenInnerDropdown] = useState<boolean>(false);
  const [items, setItems] = useState<DropdownItem[]>(dropdownItems);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDialogModal, setOpenDialogModal] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [fade, setFade] = useState(false);

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
        <Badge position="bottom">
          <Button rounded>&copy;</Button>
        </Badge>
      </Wrapper>
      <Wrapper>
        <Checkbox
          disabled
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
          label={"click me"}
        />
        <Checkbox
          rounded={true}
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
          label={"click me"}
        />
        <Checkbox
          backgroundColor="green"
          rounded={true}
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
          label={"click me"}
        />
        <Checkbox
          backgroundColor="green"
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
          label={"click me"}
        />
        <Checkbox
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
          label={"click me"}
        />
        <Checkbox
          label="a as dasd as"
          disabled
          variant={"toggle"}
          checked={checked}
          onChange={(value) => {
            setChecked(value);
          }}
        />
        <Checkbox
          label="a as dasd as"
          variant={"toggle"}
          checked={checked}
          onChange={(value) => {
            setChecked(value);
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
          onClick={setOpenDropdown}
          onKeyDown={setOpenDropdown}
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
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
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
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          onMouseEnter={setOpenDropdown1}
          onMouseLeave={setOpenDropdown1}
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
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
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
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          position={"right"}
        >
          <>
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
            <Dropdown
              position="right"
              isOpen={openInnerDropdown}
              title={"Location"}
              onClick={setOpenDropdown1}
              onKeyDown={setOpenDropdown1}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <h1>Dropdown</h1>
              </div>
            </Dropdown>
          </>
        </Dropdown>
      </Wrapper>
      <div>
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          fullWidth
        >
          <div>
            <h1>Dropdown</h1>
          </div>
        </Dropdown>
      </div>
      <Wrapper>
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Open new modal
        </Button>
        <Backdrop open={openModal} setOpen={setOpenModal} />
      </Wrapper>
      <Wrapper>
        <Pagination
          handler={(value: number) => {
            console.log(value);
          }}
        />
        <Pagination
          handler={(value: number) => {
            console.log(value);
          }}
          pages={9}
        />
        <Pagination
          handler={(value: number) => {
            console.log(value);
          }}
          pages={316}
        />
      </Wrapper>
      <Wrapper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("form submited");
          }}
        >
          <TextInput onChange={setValue} value={value} />
          <TextInput onChange={setValue} value={value} />
          <TextInput onChange={setValue} value={value} />
          <TextInput onChange={setValue} value={value} />
          <TextInput
            error={error}
            helperText="Some text"
            onChange={(value) => {
              setValue(value);
              setError(validate(value));
            }}
            value={value}
          />
          <TextInput
            onChange={setValue}
            value={value}
            placeholder="Placeholder"
          />
          <TextInput disabled placeholder="Placeholder" />
          <button type="submit">submit</button>
        </form>
      </Wrapper>
      <Wrapper>
        <Button
          onClick={() => {
            setOpenDialogModal(true);
          }}
        >
          Open dialog
        </Button>
        <DialogModal
          header={<div>header</div>}
          body={<div>body</div>}
          footer={
            <div style={{ display: "flex", gap: "10px" }}>
              <Button onClick={() => setOpenDialogModal(false)}>Click</Button>
              <Button variant="error-outlined">Cancel</Button>
            </div>
          }
          open={openDialogModal}
          onClick={(value) => {
            setOpenDialogModal(false);
          }}
        />
      </Wrapper>
    </div>
  );
}

export default App;
