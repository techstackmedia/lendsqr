import "./UsersTable.scss";
import filterButton from "../../images/filter-button.png";
import verticalMenu from "../../images/vertical-menu.png";
import watchEye from "../../images/watch.png";
import blacklistUser from "../../images/blacklist.png";
import activeUser from "../../images/active.png";

import { useState } from "react";
import { Link } from "react-router-dom";

const UsersTable = ({ users }: any) => {
  const [state, setState] = useState(true);
  const [userList, setUserList] = useState<any>([]);
  const checkActiveStyle = {
    backgroundColor: "rgba(84, 95, 125, 0.06)",
    borderRadius: "100px",
    color: "#545f7d",
    padding: "10px 20px",
  };

  const onClick = (id: any) => {
    if (state) {
      const filterUserList = users.filter((item: any) => item.id === id);
      setUserList(filterUserList);
      setState((prev) => {
        return !prev;
      });
    }
  };

  const onMouseLeave = () => {
    if (state === false) {
      setState(true);
    }
  };

  const getUsers = users.map((item: any) => {
    const orgNameTruncate = () => {
      const orgName = item.orgName.split("");
      if (orgName.length > 15) {
        orgName.splice(15, orgName.length - 15, "...");
        const orgNameToString = orgName.join("");
        return orgNameToString.replaceAll("-", " ").replace(" ...", "...");
      } else {
        return item.orgName.replaceAll("-", " ");
      }
    };
    const organization = orgNameTruncate();

    const orgArr = organization.split(" ");
    const orgName = orgArr
      .map((item: any) => {
        return item[0].toUpperCase() + item.slice(1);
      })
      .join(" ");

    const userNameTruncate = () => {
      const userName = item.userName.split("");
      if (userName.length > 15) {
        userName.splice(15, userName.length - 15, "...");
        const userNameToString = userName.join("");
        return userNameToString;
      } else {
        return item.userName;
      }
    };
    const userName = userNameTruncate();

    const emailTruncate = () => {
      const email = item.email.split("");
      if (email.length > 20) {
        email.splice(20, email.length - 20, "...");
        const emailToString = email.join("");
        return emailToString;
      } else {
        return item.email;
      }
    };
    const email = emailTruncate();

    const phoneNumberTruncate = () => {
      const phoneNumber = item.phoneNumber.split("");
      if (phoneNumber.length > 15) {
        phoneNumber.splice(15, phoneNumber.length - 15, "...");
        const phoneNumberToString = phoneNumber.join("");
        return phoneNumberToString.replace(" ...", "...");
      } else {
        return item.phoneNumber;
      }
    };
    const phoneNumber = phoneNumberTruncate();

    const newDate = new Date(item.createdAt);
    const dateString =
      newDate.toDateString() + " " + newDate.toLocaleTimeString();
    const dateArr = dateString.toUpperCase().split(" ");
    dateArr[0] = "";
    dateArr[2] = dateArr[2] + ",";
    const d = dateArr[4].split(":");
    d[2] = "";
    const elem = d.join(" ").replace(" ", ":");
    dateArr[4] = elem;
    const date: any = dateArr.join(" ");
    const createdAtTruncate = () => {
      const createdAt = date.split("");

      if (createdAt.length > 22) {
        createdAt.splice(22, createdAt.length - 22, "...");
        const createdAtToString = createdAt.join("");
        return createdAtToString.replace("....", "...");
      } else {
        return createdAt;
      }
    };
    const createdAt = createdAtTruncate();

    const orgNameTitle = item.orgName.replaceAll("-", " ");
    const orgArray = orgNameTitle.split(" ");
    const orgTitle = orgArray
      .map((item: any) => {
        return item[0].toUpperCase() + item.slice(1);
      })
      .join(" ");

    return (
      <tr key={item.id}>
        <td title={item.orgName.length > 15 && orgTitle}>{orgName}</td>
        <td title={item.userName.length > 15 && item.userName}>{userName}</td>
        <td title={item.email.length > 20 && item.email}>{email}</td>
        <td title={item.phoneNumber.length > 15 && item.phoneNumber}>
          {phoneNumber}
        </td>
        <td title={item.createdAt.length > 21 && date}>{createdAt}</td>
        <td>
          <span style={checkActiveStyle}>Inactive</span>
        </td>
        <td onClick={() => onClick(item.id)} onMouseLeave={onMouseLeave}>
          <img src={verticalMenu} alt="verival menu icon on table header" />
          {userList.length !== 0 && userList[0].id === item.id && (
            <div className={`${state}`}>
              <ul>
                <li>
                  <img src={watchEye} alt="watch or view icon" />{" "}
                  <Link to={`/dashboard/users/detail/${userList[0].id}`}>
                    View Details
                  </Link>
                </li>
                <li>
                  <img src={blacklistUser} alt="deleted user icon" /> Blacklist
                  User
                </li>
                <li>
                  <img src={activeUser} alt="active user icon" />
                  Activate User
                </li>
              </ul>
            </div>
          )}
        </td>
      </tr>
    );
  });

  return (
    <div className="UsersTable" style={{ maxHeight: 640, overflowY: "auto" }}>
      <table>
        <thead>
          <tr>
            <th>
              <span>Organization</span>
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Username</span>
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Email</span>
              <img
                src={filterButton}
                alt="filter button icon on table header"
              />
            </th>
            <th>
              <span>Phone Number</span>
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Date Joined</span>
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th>
              <span>Status</span>
              <img src={filterButton} alt="filter button on table header" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>{getUsers}</tbody>
      </table>
    </div>
  );
};

export default UsersTable;
