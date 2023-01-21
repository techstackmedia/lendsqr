import paginatedRowArrow from "../../images/pagination-down-button.png";
import "./Pagination.scss";
import arrowRight from "../../images/arrow-right.png";
import arrowEnabled from "../../images/arrow-enabled.png";
import arrowInactive from "../../images/arrow-inactive.png";
import arrowActive from "../../images/arrow-active.png";
import { useState } from "react";

const Pagination = ({
  users,
  text,
  handleTextClick,
  handleClick,
  goPreviousPage,
  goNextPage,
  buttonTextContent,
  pages,
}: any) => {
  const [isTrue, setIsTrue] = useState(true);
  let list: any = Array.from(Array(pages).keys()).splice(1);
  const buttonText = (i: number) => {
    if (i > list.length) {
      i = 1;
    }

    if (list.length > 3) {
      let dots: any = "...";
      list.splice(1, i - 3, dots);
      list.splice(5, list.length - 7, dots);
    }

    if (list[list.length - 1] === "...") {
      list.pop();
    }

    if (text < 50 && (i === 1 || i === 2 || i === 3)) {
      list.splice(0, 1);
      list.shift();
      list.unshift(1);
    }

    if (text <= 10 && buttonTextContent >= list[list.length - 2]) {
      list.splice(1, 0, 2);
      list.splice(2, 0, 3);
    }

    if (text <= 10 && buttonTextContent >= list[list.length - 1]) {
      list.splice(3, 0, 4);
    }

    if (list[list.length - 1] === "..." && list.length === 5 && text === 20) {
      list.pop();
      console.log(list);
      list.splice(4, 0, 5);
    }

    const Button = list.map((item: number | string, index: any) => {
      let button: any;
      if (item === i || item === "...") {
        button = (
          <button
            className={item !== "..." ? "active" : "dot"}
            key={index}
            type="button"
          >
            {item}
          </button>
        );
      } else {
        button = (
          <button onClick={handleClick} key={index} type="button">
            {item}
          </button>
        );
      }
      return button;
    });

    return Button;
  };

  const onClick = () => {
    setIsTrue((prev) => {
      return !prev;
    });
  };

  const handleClose = () => {
    if (!isTrue) {
      setIsTrue(true);
    }
  };

  const divsContent = [5, 10, 20, 25, 50, 100];

  const divs = divsContent.map((item: any) => {
    return (
      <div
        onClick={handleClose}
        className={item === +text ? "divs" : undefined}
        key={item}
      >
        {item}
      </div>
    );
  });

  return (
    <div className="paginationButtons">
      <div>
        <span>Showing</span>{" "}
        <button type="button" onClick={onClick}>
          {text.replace("Rows", users.length)}
          <img
            style={{ transform: !isTrue ? "rotate(180deg)" : "rotate(0)" }}
            src={paginatedRowArrow}
            alt="arrow down button"
          />
        </button>{" "}
        <span>out of 100</span>
        {!isTrue && (
          <div
            onClick={handleTextClick}
            style={{
              position: "absolute",
              width: "100%",
              background: "#fff",
              borderRadius: 4,
              zIndex: 1,
            }}
          >
            <div className="rowDropdown">
              <div
                onClick={handleClose}
                className="rows"
                title="Reset to default rows"
              >
                Rows
              </div>
              {divs}
            </div>
          </div>
        )}
      </div>
      <div style={{ visibility: text < users?.length ? "visible" : "hidden" }}>
        <span onClick={goPreviousPage}>
          <img
            style={{
              transform: buttonTextContent !== 1 ? "rotate(180deg)" : "initial",
            }}
            src={buttonTextContent !== 1 ? arrowEnabled : arrowRight}
            alt="arrow pointing to the right"
          />
        </span>
        {buttonText(buttonTextContent)}
        <span onClick={goNextPage}>
          <img
            style={{
              transform:
                buttonTextContent === list[list.length - 1]
                  ? "rotate(180deg)"
                  : "initial",
            }}
            src={
              list[list.length - 1] === buttonTextContent
                ? arrowInactive
                : arrowActive
            }
            alt="arrow pointing to the right"
          />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
