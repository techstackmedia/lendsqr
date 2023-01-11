import "./UsersTable.scss";
import filterButton from "../../images/filter-button.png";
import verticalMenu from "../../images/vertical-menu.png";
const UsersTable = () => {
  const checkActiveStyle = {
    backgroundColor: "rgba(84, 95, 125, 0.06)",
    borderRadius: "100px",
    color: "#545f7d",
    padding: "10px 20px",
  };

  let note = "adedejijohn@lendsqr.com";
  const textTruncate = () => {
    const text = note.split("");
    if (text.length > 20) {
      text.splice(20, note.length - 20, "...");
      const toString = text.join("");
      return toString;
    } else {
      return note;
    }
  };

  const email = textTruncate();

  return (
    <div className="UsersTable">
      <table>
        <thead>
          <tr>
            <th>
              <span>Organization</span>{" "}
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Username</span>{" "}
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Email</span>{" "}
              <img
                src={filterButton}
                alt="filter button icon on table header"
              />
            </th>
            <th>
              <span>Phone Number</span>{" "}
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Date Joined</span>{" "}
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Status</span>{" "}
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td title={note}>{email}</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>{" "}
            </td>{" "}
            <td>
              {" "}
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          <div></div>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td title={note}>{email}</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>{" "}
            </td>
            <td>
              {" "}
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          <div></div>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td title={note}>{email}</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>{" "}
            </td>{" "}
            <td>
              {" "}
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          <div></div>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
