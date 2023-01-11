import paginatedRowArrow from "../../images/pagination-down-button.png";
import "./Pagination.scss";
import arrowRight from "../../images/arrow-right.png";

const Pagination = () => {
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
        <button className="active">1</button> <button>2</button>{" "}
        <button>3</button> <button>...</button> <button>15</button>{" "}
        <button>16</button>
        <span>
          <img src={arrowRight} alt="arrow pointing to the right" />
        </span>
      </div>
    </div>
  );
};

export default Pagination;
