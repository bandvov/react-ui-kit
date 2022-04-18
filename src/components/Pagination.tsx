import { useState, useEffect } from "react";

function Pagination({
  pages = 5,
  show = 4,
}: {
  pages?: number;
  show?: number;
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
    console.log(currentButton);
  }, [currentButton]);

  const items = arrayOfCurrentButtons.map((item, index) => {
    const isCurrentButton = currentButton === item - 1;
    return (
      <li>
        <button
          onClick={() => setCurrentButton(item - 1)}
          style={{
            backgroundColor: isCurrentButton ? "blue" : "",
            color: isCurrentButton ? "white" : "black",
            height: "26px",
            borderRadius: 0,
            border: "1px solid lightgray",
            cursor: "pointer",
            minWidth: "26px",
          }}
          key={index}
        >
          {item}
        </button>
      </li>
    );
  });

  const previousButtonHandler = () => {
    if (currentButton < arrayOfCurrentButtons[0] && currentButton >= 0) {
      setArrayOfCurrentButtons(
        baseArray.slice(
          arrayOfCurrentButtons[0] - show - 1,
          arrayOfCurrentButtons[0] - 1
        )
      );
    }
    if (currentButton + 1 === arrayOfCurrentButtons[0] && currentButton === 0) {
      setCurrentButton(baseArray.length - 1);
      setArrayOfCurrentButtons(baseArray.slice(baseArray.length - show));
    } else {
      setCurrentButton(currentButton - 1);
    }
  };

  const nextButtonHandler = () => {
    console.log("here");

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
    if (currentButton + 1 === baseArray.length) {
      setArrayOfCurrentButtons(
        baseArray.slice(
          0,

          show
        )
      );
      setCurrentButton(0);
    } else {
      setCurrentButton(currentButton + 1);
    }
  };

  console.log("current", currentButton);
  console.log("show", show);
  console.log("current - show", currentButton + show);

  return (
    <div style={{ display: "flex" }}>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <button
            disabled={currentButton === 0}
            onClick={() => {
              setCurrentButton(0);
              setArrayOfCurrentButtons(baseArray.slice(0, show));
            }}
            style={{
              height: "26px",
              width: "max-content",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgray",
              cursor: "pointer",
              minWidth: "20px",
            }}
          >
            &laquo;
          </button>
        </li>
        <li>
          <button
            onClick={previousButtonHandler}
            style={{
              height: "26px",
              width: "max-content",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgray",
              cursor: "pointer",
              minWidth: "20px",
            }}
          >
            &#8249;
          </button>
        </li>
        {currentButton >= show && (
          <li>
            <button
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
                height: "26px",
                borderRadius: 0,
                cursor: "pointer",
                border: "1px solid lightgray",
                minWidth: "26px",
              }}
            >
              {"..."}
            </button>
          </li>
        )}
        {items}

        {arrayOfCurrentButtons[0] + show <= baseArray.length && (
          <li>
            <button
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
                height: "26px",
                borderRadius: 0,
                border: "1px solid lightgray",
                cursor: "pointer",
                minWidth: "26px",
              }}
            >
              {"..."}
            </button>
          </li>
        )}

        <li>
          <button
            onClick={nextButtonHandler}
            style={{
              height: "26px",
              width: "max-content",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgray",
              cursor: "pointer",
              minWidth: "20px",
            }}
          >
            &rsaquo;
          </button>
        </li>
        <li>
          <button
            disabled={currentButton + 1 === baseArray[baseArray.length - 1]}
            onClick={() => {
              setCurrentButton(baseArray.length - 1);
              setArrayOfCurrentButtons(baseArray.slice(-show));
            }}
            style={{
              height: "26px",
              width: "max-content",
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              border: "1px solid lightgray",
              cursor: "pointer",
              minWidth: "20px",
            }}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
