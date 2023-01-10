import "./UsersTable.scss";
const UsersTable = () => {
  return (
    <div className="UsersTable">
      <table>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date Joined</th>
            <th>Status</th>
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
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
