import React, { useState } from "react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
  const [checked, setChecked] = useState(false);
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
          flex: 1,
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
            console.log("click");
            setChecked(!checked);
          }}
          label={"click me"}
        />
        <Checkbox
          variant={"toggle"}
          checked={checked}
          handler={() => {
            console.log("click");
            setChecked(!checked);
          }}
        />
      </div>
    </div>
  );
}

export default App;
