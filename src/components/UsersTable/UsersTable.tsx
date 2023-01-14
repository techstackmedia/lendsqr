import "./UsersTable.scss";
import filterButton from "../../images/filter-button.png";
import verticalMenu from "../../images/vertical-menu.png";
import watchEye from "../../images/watch.png";
import blacklistUser from "../../images/blacklist.png";
import activeUser from "../../images/active.png";

import { useState } from "react";
import { Link } from "react-router-dom";

const UsersTable = () => {
  const [state, setState] = useState(true);
  const checkActiveStyle = {
    backgroundColor: "rgba(84, 95, 125, 0.06)",
    borderRadius: "100px",
    color: "#545f7d",
    padding: "10px 20px",
  };

  const onClick = () => {
    setState(() => {
      return !state;
    });
  };

  const onMouseLeave = () => {
    if (state === false) {
      setState(true);
    }
  };

  let emailContent: any = "adedejijohn.com";
  let userNameContent: any = "Bello Osagie";
  let organizationContent: any = "Techstack Media";
  let dateContent: any = "MAY 15, 2020 10:00 AM";
  let phoneNumberContent: any = "08080323455";

  const textEmailTruncate = () => {
    const textEmail = emailContent.split("");
    if (textEmail.length > 20) {
      textEmail.splice(20, textEmail.length - 20, "...");
      const textEmailToString = textEmail.join("").replace("....", "...");
      return textEmailToString;
    } else {
      return textEmail;
    }
  };

  const email = textEmailTruncate();

  const userNameTruncate = () => {
    const userName = userNameContent.split("");
    if (userName.length > 15) {
      userName.splice(15, userName.length - 15, "...");
      const userNameToString = userName.join("");
      return userNameToString;
    } else {
      return userName;
    }
  };

  const userName = userNameTruncate();

  const organizationTruncate = () => {
    const organization = organizationContent.split("");
    if (organization.length > 15) {
      organization.splice(15, organization.length - 15, "...");
      const organizationToString = organization.join("");
      return organizationToString;
    } else {
      return organization;
    }
  };

  const organization = organizationTruncate();

  const dateTruncate = () => {
    const date = dateContent.split("");
    if (date.length > 21) {
      date.splice(21, date.length - 21, "...");
      const dateToString = date.join("");
      return dateToString;
    } else {
      return date;
    }
  };

  const date = dateTruncate();

  const phoneNumberTruncate = () => {
    const phoneNumber = phoneNumberContent.split("");
    if (phoneNumber.length > 13) {
      phoneNumber.splice(13, phoneNumber.length - 13, "...");
      const phoneNumberToString = phoneNumber.join("");
      return phoneNumberToString;
    } else {
      return phoneNumber;
    }
  };

  const phoneNumber = phoneNumberTruncate();

  return (
    <div className="UsersTable">
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
        <tbody>
          <tr>
            <td title={organizationContent.length > 15 && organizationContent}>
              {organization}
            </td>
            <td title={userNameContent.length > 15 && userNameContent}>
              {userName}
            </td>
            <td title={emailContent.length > 20 && emailContent}>{email}</td>
            <td title={phoneNumberContent.length > 13 && phoneNumberContent}>
              {phoneNumber}
            </td>
            <td title={dateContent.length > 21 && dateContent}>{date}</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>
            </td>
            <td>
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          {/* <div></div> */}
          <tr>
            <td title={organizationContent.length > 15 && organizationContent}>
              {organization}
            </td>
            <td title={userNameContent.length > 15 && userNameContent}>
              {userName}
            </td>
            <td title={emailContent.length > 20 && emailContent}>{email}</td>
            <td title={phoneNumberContent.length > 13 && phoneNumberContent}>
              {phoneNumber}
            </td>
            <td title={dateContent.length > 21 && dateContent}>{date}</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>
            </td>
            <td onClick={onClick} onMouseLeave={onMouseLeave}>
              <img src={verticalMenu} alt="verival menu icon on table header" />
              <div className={`${state}`}>
                <ul>
                  <li>
                    <img src={watchEye} alt="watch or view icon" />{" "}
                    <Link to="/dashboard/users/detail">View Details</Link>
                  </li>
                  <li>
                    <img src={blacklistUser} alt="deleted user icon" />{" "}
                    Blacklist User
                  </li>
                  <li>
                    <img src={activeUser} alt="active user icon" />
                    Activate User
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          {/* <div></div> */}
          <tr>
            <td title={organizationContent.length > 15 && organizationContent}>
              {organization}
            </td>
            <td title={userNameContent.length > 15 && userNameContent}>
              {userName}
            </td>
            <td title={emailContent.length > 20 && emailContent}>{email}</td>
            <td title={phoneNumberContent.length > 13 && phoneNumberContent}>
              {phoneNumber}
            </td>
            <td title={dateContent.length > 21 && dateContent}>{date}</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>
            </td>
            <td onClick={onClick} className={`${state}`}>
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          {/* <div></div> */}
          <tr>
            <td title={organizationContent.length > 15 && organizationContent}>
              {organization}
            </td>
            <td title={userNameContent.length > 15 && userNameContent}>
              {userName}
            </td>
            <td title={emailContent.length > 20 && emailContent}>{email}</td>
            <td title={phoneNumberContent.length > 13 && phoneNumberContent}>
              {phoneNumber}
            </td>
            <td title={dateContent.length > 21 && dateContent}>{date}</td>
            <td>
              <span style={checkActiveStyle}>Inactive</span>
            </td>
            <td>
              <img src={verticalMenu} alt="verival menu icon on table header" />
            </td>
          </tr>
          {/* <div></div> */}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
