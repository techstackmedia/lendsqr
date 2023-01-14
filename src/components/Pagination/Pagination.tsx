import paginatedRowArrow from "../../images/pagination-down-button.png";
import "./Pagination.scss";
import arrowRight from "../../images/arrow-right.png";
import arrowEnabled from "../../images/arrow-enabled.png";
import arrowInactive from "../../images/arrow-inactive.png";
import arrowActive from "../../images/arrow-active.png";
import { useState } from "react";

const Pagination = () => {
  const [buttonTextContent, setButtonTextContext] = useState<any>(1);

  let list = Array.from(Array(17).keys()).splice(1);
  const buttonText = (i: number) => {
    let initialList = list.length;
    let lastValues = list.length - 2;
    let dots: any = "...";
    let splicer;
    if (i === 1) {
      splicer = i + 2;
    } else {
      if (list.length - 3 === i) {
        splicer = i;
      } else {
        splicer = i + 1;
      }

      if (i === 2) {
        lastValues = list.length - 2;
      } else {
        lastValues = list.length - 1;
      }
    }
    if (lastValues - splicer === 1) {
      list.splice(splicer, lastValues - (i + 1), dots);
    } else {
      list.splice(splicer, lastValues - splicer, dots);
      list.splice(1, i - 3, dots);

      if (i === 1 || i === 2) {
        list.splice(1, 1);
      } else if (i === initialList || i === initialList - 1) {
        list.pop();
        list[1] = 2;
        list.splice(2, 0, dots);
      }
      if (initialList - 3 === i) {
        list.splice(4, 0, i + 1);
      }
      if (i === initialList) {
        list.splice(3, 0, initialList - 2);
      }
    }

    const handleClick = (event: any) => {
      const text = event.currentTarget.textContent;
      if (text !== "...") {
        setButtonTextContext(+text);
      } else {
        setButtonTextContext(null);
      }
    };

    const Button = list.map((item: number | string, index) => {
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

  // console.log(list.length, buttonTextContent);

  return (
    <div className="paginationButtons">
      <div>
        <span>Showing</span>{" "}
        <button type="button">
          100
          <img src={paginatedRowArrow} alt="arrow down button" />
        </button>{" "}
        <span>out of 100</span>
      </div>
      <div>
        <span>
          <img
            style={{
              transform: buttonTextContent !== 1 ? "rotate(180deg)" : "initial",
            }}
            src={buttonTextContent !== 1 ? arrowEnabled : arrowRight}
            alt="arrow pointing to the right"
          />
        </span>
        {buttonText(buttonTextContent)}
        <span>
          <img
            style={{
              transform:
                buttonTextContent === list.length
                  ? "rotate(180deg)"
                  : "initial",
            }}
            src={
              list.length === buttonTextContent ? arrowInactive : arrowActive
            }
            alt="arrow pointing to the right"
          />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
