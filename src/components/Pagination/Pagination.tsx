import paginatedRowArrow from "../../images/pagination-down-button.png";
import "./Pagination.scss";
import arrowRight from "../../images/arrow-right.png";

const Pagination = () => {
  const buttonText = (i: number) => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      lastValues = list.length - 1;
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
    }
    const Button = list.map((item, index) => {
      let button: any;
      if (item === i) {
        button = (
          <button className="active" key={index} type="button">
            {item}
          </button>
        );
      } else {
        button = (
          <button key={index} type="button">
            {item}
          </button>
        );
      }
      return button;
    });

    return Button;
  };

  return (
    <div className="paginationButtons">
      <div>
        <span>Showing</span>{" "}
        <button
          type="button"
          style={{
            backgroundColor: "rgba(33, 63, 125, 0.1)",
            borderRadius: 4,
            border: 0,
            fontFamily: "Work Sans",
            fontWeight: 500,
            fontSize: 14,
            color: "#213F7D",
            padding: "5px 10px",
          }}
        >
          100{" "}
          <img
            src={paginatedRowArrow}
            alt="arrow down button"
            style={{ marginLeft: 10, position: "relative", top: 2 }}
          />
        </button>{" "}
        <span>out of 100</span>
      </div>
      <div style={{ marginRight: 15, display: "flex", alignItems: "center" }}>
        <span>
          <img src={arrowRight} alt="arrow pointing to the right" />
        </span>
        {buttonText(8)}
        <span>
          <img src={arrowRight} alt="arrow pointing to the right" />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
