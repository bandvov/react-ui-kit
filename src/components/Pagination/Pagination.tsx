import { useState, useEffect } from "react";
import { COLORS } from "../../CONSTANTS";
import Button from "../Button/Button";

function Pagination({
  pages = 1,
  show = 4,
  handler,
}: {
  pages?: number;
  show?: number;
  handler: (value: number) => void;
}) {
  const baseArray = Array(pages)
    .fill("a")
    .map((_, index) => index + 1);

  const [currentButton, setCurrentButton] = useState<number>(0);
  const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState<number[]>(
    []
  );

  useEffect(() => {
    return setArrayOfCurrentButtons(baseArray.slice(0, show));
  }, []);

  useEffect(() => {
    console.log("current", currentButton);
    console.log("show", show);
    console.log("arrayOfCurrentButtons", arrayOfCurrentButtons[0]);
    console.log(currentButton < show);
    handler(currentButton);
  }, [currentButton]);

  const items = arrayOfCurrentButtons.map((item, index) => {
    const isCurrentButton = currentButton === item - 1;
    return (
      <li>
        <Button
          color={isCurrentButton ? "white" : ""}
          padding="4px 10px"
          variant="default-outlined"
          onClick={() => setCurrentButton(item - 1)}
          style={{
            backgroundColor: isCurrentButton ? COLORS.Blue : "",
            marginLeft: "2px",
            marginRight: "2px",
          }}
          key={index}
        >
          {item}
        </Button>
      </li>
    );
  });

  const previousButtonHandler = () => {
    if (currentButton === 0) return;
    if (currentButton < arrayOfCurrentButtons[0] && currentButton > 0) {
      setArrayOfCurrentButtons(
        baseArray.slice(
          arrayOfCurrentButtons[0] - show - 1,
          arrayOfCurrentButtons[0] - 1
        )
      );
    }

    setCurrentButton(currentButton - 1);
  };

  const nextButtonHandler = () => {
    if (currentButton + 1 === baseArray.length) return;
    if (
      currentButton + 1 >=
      arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1]
    ) {
      setArrayOfCurrentButtons(
        baseArray.slice(
          arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1],
          arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1] + show
        )
      );
    }

    setCurrentButton(currentButton + 1);
  };

  return (
    <div style={{ display: "flex" }}>
      <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li>
          <Button
            variant="default-outlined"
            padding="4px 10px"
            disabled={currentButton === 0}
            onClick={() => {
              setCurrentButton(0);
              setArrayOfCurrentButtons(baseArray.slice(0, show));
            }}
            style={{
              marginLeft: "2px",
              marginRight: "2px",
            }}
          >
            &laquo;
          </Button>
        </li>
        <li>
          <Button
            disabled={currentButton === 0}
            variant="default-outlined"
            padding="4px 10px"
            onClick={previousButtonHandler}
            style={{
              marginLeft: "2px",
              marginRight: "2px",
            }}
          >
            &#8249;
          </Button>
        </li>
        {currentButton >= show && (
          <li>
            <Button
              padding="4px 10px"
              variant="default-outlined"
              onClick={() => {
                console.log(currentButton);
                setArrayOfCurrentButtons(
                  baseArray.slice(
                    arrayOfCurrentButtons[0] - show - 1,
                    arrayOfCurrentButtons[0] - 1
                  )
                );
                console.log("here");
                setCurrentButton(arrayOfCurrentButtons[0] - 2);
              }}
              style={{
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              {"..."}
            </Button>
          </li>
        )}
        {items}

        {arrayOfCurrentButtons[0] + show <= baseArray.length && (
          <li>
            <Button
              padding="4px 10px"
              variant="default-outlined"
              onClick={() => {
                console.log("elipsis");
                if (
                  currentButton <
                  arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1]
                ) {
                  console.log("here");
                  console.log(arrayOfCurrentButtons[0]);
                  console.log(
                    arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1] +
                      show
                  );
                  setArrayOfCurrentButtons(
                    baseArray.slice(
                      arrayOfCurrentButtons[0] + show - 1,
                      arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1] +
                        show
                    )
                  );
                  setCurrentButton(
                    arrayOfCurrentButtons[arrayOfCurrentButtons.length - 1]
                  );
                } else {
                  console.log("here 1");
                  setArrayOfCurrentButtons(
                    baseArray.slice(currentButton + 1, currentButton + show + 1)
                  );
                  setCurrentButton(currentButton + 1);
                }
              }}
              style={{
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              {"..."}
            </Button>
          </li>
        )}

        <li>
          <Button
            disabled={currentButton + 1 === baseArray.length}
            padding="4px 10px"
            variant="default-outlined"
            onClick={nextButtonHandler}
            style={{
              marginLeft: "2px",
              marginRight: "2px",
            }}
          >
            &rsaquo;
          </Button>
        </li>
        <li>
          <Button
            padding="4px 10px"
            variant="default-outlined"
            disabled={currentButton + 1 === baseArray[baseArray.length - 1]}
            onClick={() => {
              setCurrentButton(baseArray.length - 1);
              setArrayOfCurrentButtons(baseArray.slice(-show));
            }}
            style={{
              marginLeft: "2px",
              marginRight: "2px",
            }}
          >
            &raquo;
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
