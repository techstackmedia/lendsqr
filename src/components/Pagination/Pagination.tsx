import paginatedRowArrow from "../../images/pagination-down-button.png";
import "./Pagination.scss";
import arrowRight from "../../images/arrow-right.png";
import arrowEnabled from "../../images/arrow-enabled.png";
import arrowInactive from "../../images/arrow-inactive.png";
import arrowActive from "../../images/arrow-active.png";
import { useState } from "react";

const Pagination = ({ users, text, handleTextClick, sliceUsersList }: any) => {
  // console.log(sliceUsersList);
  // 100 - 10
  // 20 - x

  const pages = Math.ceil(users?.length / sliceUsersList.length) + 1;
  console.log(pages);

  const [buttonTextContent, setButtonTextContext] = useState<any>(1);
  const [isTrue, setIsTrue] = useState(true);

  let list = Array.from(Array(pages).keys()).splice(1);
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

    const x: number[] = [...new Set(list)]

    const handleClick = (event: any) => {
      const text = event.currentTarget.textContent;
      if (text !== "...") {
        setButtonTextContext(+text);
      } else {
        setButtonTextContext(null);
      }
    };

    const Button = x.map((item: number | string, index) => {
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

  const onMouseLeave = () => {
    if (!isTrue) {
      setIsTrue(true);
    }
  };

  const goPreviousPage = () => {
    if (buttonTextContent > 1) {
      setButtonTextContext((prev: any) => {
        return prev - 1;
      });
    }
  };

  const goNextPage = () => {
    if (buttonTextContent < 16) {
      setButtonTextContext((prev: any) => {
        return prev + 1;
      });
    }
  };

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
            onMouseLeave={onMouseLeave}
          >
            <div className="rowDropdown">
              <div className="rows" title="Reset to default rows">
                Rows
              </div>
              <div className="firstRow">5</div>
              <div>10</div>
              <div>20</div>
              <div>25</div>
              {/* <div>50</div> */}
              <div>100</div>
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
