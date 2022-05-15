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
import Select from "./components/Select/Select";
import { COLORS } from "./CONSTANTS";
import { IDropdownItem } from "./types";
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

const dropdownItems: IDropdownItem[] = [
  {
    value: 0,
    title: "New York",
  },
  {
    value: 1,
    title: "Dublin",
  },
  {
    value: 2,
    title: "California",
  },
  {
    value: 3,
    title: "Istanbul",
  },
  {
    value: 4,
    title: "Izmir",
  },
  {
    value: 5,
    title: "Oslo",
  },
];

function App() {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);
  const [openDropdown1, setOpenDropdown1] = useState<boolean>(false);
  const [openInnerDropdown, setOpenInnerDropdown] = useState<boolean>(false);
  const [items, setItems] = useState<IDropdownItem[]>(dropdownItems);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openDialogModal, setOpenDialogModal] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [values, setValues] = useState<number[]>([]);
  const [error, setError] = useState(false);

  const validate = (value: string) => {
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
          <div>Dropdown</div>
        </Dropdown>
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          position={"top"}
        >
          <div>Dropdown</div>
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
          <div>Dropdown</div>
        </Dropdown>
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          position={"right"}
        >
          <div>Dropdown</div>
        </Dropdown>
        <Dropdown
          isOpen={openDropdown1}
          title={"Location"}
          onClick={setOpenDropdown1}
          onKeyDown={setOpenDropdown1}
          position={"right"}
        >
          <>
            <div>Dropdown</div>
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

        <Dropdown
          position="right-bottom"
          isOpen={openDropdown}
          title={"Location"}
          onClick={setOpenDropdown}
          onKeyDown={setOpenDropdown}
        >
          <div style={{ border: "1px solid" }}>
            <h1 style={{ margin: "2rem" }} tabIndex={0}>
              Dropdown
            </h1>
          </div>
        </Dropdown>
        <Dropdown
          position="left-bottom"
          isOpen={openDropdown}
          title={"Location"}
          onClick={setOpenDropdown}
          onKeyDown={setOpenDropdown}
        >
          <div style={{ border: "1px solid" }}>
            <h1 style={{ margin: "2rem" }} tabIndex={0}>
              Dropdown
            </h1>
          </div>
        </Dropdown>
        <Dropdown
          position="right-top"
          isOpen={openDropdown}
          title={"Location"}
          onClick={setOpenDropdown}
          onKeyDown={setOpenDropdown}
        >
          <div style={{ border: "1px solid" }}>
            <h1 style={{ margin: "2rem" }} tabIndex={0}>
              Dropdown
            </h1>
          </div>
        </Dropdown>
        <Dropdown
          position="left-top"
          isOpen={openDropdown}
          title={"Location"}
          onClick={setOpenDropdown}
          onKeyDown={setOpenDropdown}
        >
          <div style={{ border: "1px solid" }}>
            <h1 style={{ margin: "2rem" }} tabIndex={0}>
              Dropdown
            </h1>
          </div>
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
          slide="bottom"
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
      <Wrapper>
        <Select
          multi={true}
          values={values}
          setValues={setValues}
          title={"One"}
          items={items}
        />
        <Select
          values={values}
          setValues={setValues}
          buttonStyles={{
            border: "none",
          }}
          fullWidth
          title="I am select"
          items={items}
        />
      </Wrapper>
    </div>
  );
}

export default App;
