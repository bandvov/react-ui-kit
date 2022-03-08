import React from "react";
import Badge from "./components/Badge";
import Button from "./components/Button/Button";

function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat( auto-fit, minmax(150px, 1fr) )",
        gap: "10px",
        margin: "1rem",
        border: "1px solid",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: "1rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(1fr, max-content)",
          gap: "10px",
          border: "1px solid",
        }}
      >
        <Button variant="success">{"success"}</Button>
        <Button variant={"danger"}>{"danger"}</Button>
        <Button variant={"error"}>{"error"}</Button>

        <Button variant={"success-outlined"}>{"success outlined"}</Button>
        <Button variant={"danger-outlined"}>{"danger outlined"}</Button>
        <Button variant={"error-outlined"}>{"error outlined"}</Button>
        <Button variant={"default-outlined"}>{"default outlined"}</Button>

        <Button disabled borderRadius="30px/30px" variant={"disabled"}>
          {"headsdasdo"}
        </Button>

        <Button borderRadius="30px/30px">
          <span>H</span>
        </Button>
        <Button icon={<div>&copy;</div>}>
          <span>test button</span>
        </Button>
        <Button iconLeft={<div>&larr;</div>}>
          <span>test button</span>
        </Button>
      </div>
      <div style={{ border: "1px solid", gap:"20px",display:"flex" }}>
      
        <Badge label={5} >
          <Button rounded>
            &copy;
          </Button>
        </Badge>
        <Badge label={531} >
          <Button>
            &copy;
          </Button>
        </Badge>
        <Badge label={53} background="red" >
          <Button rounded variant={'success'}>
            &copy;
          </Button>
        </Badge>
        <Badge onClick={()=> alert("click on badge")} label={5}>
          <Button >
            large
          </Button>
        </Badge>
        <Badge position={'bottom'} label={5}>
          <Button rounded>
            &copy;
          </Button>
        </Badge>
        <Badge position={'top-left'} label={5}>
          <Button  rounded>
            &copy;
          </Button>
        </Badge>
        <Badge position={'bottom-left'} label={5} color="green" background="white" border="1px solid blue">
          <Button rounded>
            &copy;          
          </Button>
        </Badge>
        <Badge>
          <Button rounded>
            &copy;          
          </Button>
        </Badge>
      </div>
  
    </div>
  );
}

export default App;
