import "./UsersTable.scss";
import filterButton from "../../images/filter-button.png";
import verticalMenu from "../../images/vertical-menu.png";
const UsersTable = () => {
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
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>Inactive</td>
            <td>
              {" "}
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>

          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>Inactive</td>
            <td>
              {" "}
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
