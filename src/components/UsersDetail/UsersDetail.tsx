import { useEffect, useState } from "react";
import "./UsersDetail.scss";
import { useParams } from "react-router-dom";

const UsersDetail = () => {
  const [user, setUser] = useState<any>([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchUserAPI = async () => {
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUserAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstName =
    user.profile?.firstName === undefined
      ? "Loading..."
      : user.profile.firstName;

  const lastName =
    user.profile?.lastName === undefined ? "" : user.profile.lastName;
  let nameContent: any = `${firstName} ${lastName}`;

  const textNameTruncate = () => {
    const textName = nameContent.split("");
    if (textName.length > 14) {
      textName.splice(14, textName.length - 14, "...");
      const textNameToString = textName.join("").replace("....", "...");
      return textNameToString.replace(' ...', '...');
    } else {
      return textName;
    }
  };

  const name = textNameTruncate();

  const guarantorFirstName =
    user.guarantor?.firstName === undefined
      ? "Loading..."
      : user.guarantor.firstName;
  const guarantorLastName =
    user.guarantor?.lastName === undefined ? "" : user.guarantor.lastName;

  let guarantorNameContent: any = `${guarantorFirstName} ${guarantorLastName}`;

  const textGuarantorNameTruncate = () => {
    const textGuarantorName = guarantorNameContent.split("");
    if (textGuarantorName.length > 14) {
      textGuarantorName.splice(14, textGuarantorName.length - 14, "...");
      const textGuarantorNameToString = textGuarantorName
        .join("")
        .replace("....", "...");
      return textGuarantorNameToString.replace(' ...', '...');
    } else {
      return textGuarantorName;
    }
  };

  const guarantorName = textGuarantorNameTruncate();

  let phoneNumberContent: any =
    user?.phoneNumber === undefined ? "Loading" : user?.phoneNumber;

  const textPhoneNumberTruncate = () => {
    const textPhoneNumber = phoneNumberContent.split("");
    if (textPhoneNumber.length > 15) {
      textPhoneNumber.splice(15, textPhoneNumber.length - 15, "...");
      const textPhoneNumberToString = textPhoneNumber.join("");
      return textPhoneNumberToString.replace(' ...', '...');
    } else {
      return textPhoneNumber;
    }
  };

  const phoneNumber = textPhoneNumberTruncate();

  let guarantorPhoneNumberContent: any =
    user.guarantor?.phoneNumber === undefined
      ? "Loading"
      : user.guarantor?.phoneNumber;

  const textGuarantorPhoneNumberTruncate = () => {
    const textGuarantorPhoneNumber = guarantorPhoneNumberContent.split("");
    if (textGuarantorPhoneNumber.length > 15) {
      textGuarantorPhoneNumber.splice(
        15,
        textGuarantorPhoneNumber.length - 15,
        "..."
      );
      const textGuarantorPhoneNumberToString =
        textGuarantorPhoneNumber.join("");
      return textGuarantorPhoneNumberToString;
    } else {
      return textGuarantorPhoneNumber;
    }
  };

  const guarantorPhoneNumber = textGuarantorPhoneNumberTruncate();

  let bvnContent: any =
    user.profile?.bvn === undefined ? "Loading" : user.profile?.bvn;

  const textBVNTruncate = () => {
    const textBVN = bvnContent.split("");
    if (textBVN.length > 15) {
      textBVN.splice(15, textBVN.length - 15, "...");
      const textBVNToString = textBVN.join("");
      return textBVNToString;
    } else {
      return textBVN;
    }
  };

  const bvn = textBVNTruncate();

  let emailContent: any =
    user?.email === undefined ? "Loading..." : user?.email;

  const textEmailTruncate = () => {
    const textEmail = emailContent.split("");
    if (textEmail.length > 17) {
      textEmail.splice(17, textEmail.length - 17, "...");
      const textEmailToString = textEmail.join("").replace("....", "...");
      return textEmailToString;
    } else {
      return textEmail;
    }
  };

  const email = textEmailTruncate();

  // api doesn't provide guaranto email
  let guarantorEmailContent: any = `${user.guarantor?.firstName.toLowerCase()}${user.guarantor?.lastName.toLowerCase()}@gmail.com`;

  const textGuarantorEmailTruncate = () => {
    const textGuarantorEmail = guarantorEmailContent.split("");
    if (textGuarantorEmail.length > 17) {
      textGuarantorEmail.splice(17, textGuarantorEmail.length - 17, "...");
      const textGuarantorEmailToString = textGuarantorEmail
        .join("")
        .replace("....", "...");
      return textGuarantorEmailToString;
    } else {
      return textGuarantorEmail;
    }
  };

  const guarantorEmail = textGuarantorEmailTruncate();

  const lowMonthlyIncome =
    user.education?.monthlyIncome[1] === undefined
      ? "Loading..."
      : `₦${user.education.monthlyIncome[1]} -`;
  const highMonthlyIncome =
    user.education?.monthlyIncome[0] === undefined
      ? ""
      : `₦${user.education.monthlyIncome[0]}`;

  let monthlyIncomeContent: any = `${lowMonthlyIncome} ${highMonthlyIncome}`;

  const textMonthlyIncomeTruncate = () => {
    const textMonthlyIncome = monthlyIncomeContent.split("");
    if (textMonthlyIncome.length > 41) {
      textMonthlyIncome.splice(41, textMonthlyIncome.length - 40, "...");
      const textMonthlyIncomeToString = textMonthlyIncome
        .join("")
        .replace("....", "...");
      return textMonthlyIncomeToString;
    } else {
      return textMonthlyIncome;
    }
  };

  const monthlyIncome = textMonthlyIncomeTruncate();

  let educationLevelContent: any =
    user.education?.level === undefined ? "Loading..." : user.education.level;

  const textEducationLevelTruncate = () => {
    const textEducationLevel = educationLevelContent.split("");
    if (textEducationLevel.length > 11) {
      textEducationLevel.splice(11, textEducationLevel.length - 11, "...");
      const textEducationLevelToString = textEducationLevel
        .join("")
        .replace("....", "...");
      return textEducationLevelToString;
    } else {
      return textEducationLevel;
    }
  };

  const educationLevel = textEducationLevelTruncate();

  let officeEmailContent: any =
    user.education?.officeEmail === undefined
      ? "Loading..."
      : user.education.officeEmail;

  const textOfficeEmailTruncate = () => {
    const textOfficeEmail = officeEmailContent.split("");
    if (textOfficeEmail.length > 17) {
      textOfficeEmail.splice(17, textOfficeEmail.length - 17, "...");
      const textOfficeEmailToString = textOfficeEmail
        .join("")
        .replace("....", "...");
      return textOfficeEmailToString;
    } else {
      return textOfficeEmail;
    }
  };

  const officeEmail = textOfficeEmailTruncate();

  let employmentSectionContent: any =
    user.education?.sector === undefined ? "Loading..." : user.education.sector;

  const textEmploymentSectionTruncate = () => {
    const textEmploymentSection = employmentSectionContent.split("");
    if (textEmploymentSection.length > 15) {
      textEmploymentSection.splice(
        15,
        textEmploymentSection.length - 15,
        "..."
      );
      const textEmploymentSectionToString = textEmploymentSection
        .join("")
        .replace("....", "...");
      return textEmploymentSectionToString;
    } else {
      return textEmploymentSection;
    }
  };

  const employmentSection = textEmploymentSectionTruncate();

  const duration =
    user.education?.duration === undefined
      ? "Loading..."
      : user.education.duration;

  const loanRepayment =
    user.education?.loanRepayment === undefined
      ? "Loading..."
      : user.education.loanRepayment;

  const employmentStatus =
    user.education?.employmentStatus === undefined
      ? "Loading..."
      : user.education.employmentStatus;

  const facebook =
    user.socials?.facebook === undefined ? "Loading..." : user.socials.facebook;

  const twitter =
    user.socials?.twitter === undefined ? "Loading..." : user.socials.twitter;

  const instagram =
    user.socials?.instagram === undefined
      ? "Loading..."
      : user.socials.instagram;

  let relationship =
    user.guarantor?.gender === undefined ? "Loading..." : user.guarantor.gender;

  const relation = () => {
    let relation: any;
    if (relationship === "Male") {
      relation = "Brother";
    } else {
      relation = "Sister";
    }
    return relation;
  };
  const sibling = relation();

  const gender = user.profile?.gender === undefined ? "" : user.profile.gender;

  return (
    <div
      className="usersCount box"
      style={{
        width: "992px",
        position: "relative",
        bottom: 28,
      }}
    >
      <div className="usersDetail">
        <div className="wrapper">
          <div className="usersHeader">Personal Information</div>
          <div className="row first">
            <div className="column">
              <div className="header">full Name</div>
              <div title={nameContent.length > 14 && nameContent} className="data">
                {name}
              </div>
            </div>
            <div className="column">
              <div className="header">Phone Number</div>
              <div
                title={phoneNumberContent.length > 15 && phoneNumberContent}
                className="data"
              >
                {phoneNumber}
              </div>
            </div>
            <div className="column">
              <div className="header">Email Address</div>
              <div
                title={emailContent.length > 17 && emailContent}
                className="data"
              >
                {email}
              </div>
            </div>
            <div className="column">
              <div className="header">BVN</div>
              <div
                title={bvnContent.length > 15 && bvnContent}
                className="data"
              >
                {bvn}
              </div>
            </div>
            <div className="column">
              <div className="header">Gender</div>
              <div className="data">{gender}</div>
            </div>

            <div className="column">
              <div className="header">Marital status</div>
              <div className="data">Single</div>
            </div>

            <div className="column">
              <div className="header">Children</div>
              <div className="data">None</div>
            </div>

            <div className="column">
              <div className="header">Type of residence</div>
              <div className="data">Parent's Apartment</div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="usersHeader">Education and Employment</div>
          <div className="row second">
            <div className="column">
              <div className="header">level of education</div>
              <div
                title={
                  educationLevelContent.length > 11 && educationLevelContent
                }
                className="data"
              >
                {educationLevel}
              </div>
            </div>
            <div className="column">
              <div className="header">employment status</div>
              <div className="data">{employmentStatus}</div>
            </div>
            <div className="column">
              <div className="header">sector of employment</div>
              <div
                title={
                  employmentSectionContent.length > 15 &&
                  employmentSectionContent
                }
                className="data"
              >
                {employmentSection}
              </div>
            </div>
            <div className="column">
              <div className="header">Duration of employment</div>
              <div className="data">{duration}</div>
            </div>

            <div className="column">
              <div className="header">office email</div>
              <div
                title={officeEmailContent.length > 17 && officeEmailContent}
                className="data"
              >
                {officeEmail}
              </div>
            </div>

            <div className="column">
              <div className="header">Monthly income</div>
              <div
                title={monthlyIncomeContent.length > 41 && monthlyIncomeContent}
                className="data"
              >
                {monthlyIncome}
              </div>
            </div>

            <div className="column">
              <div className="header">loan repayment</div>
              <div className="data">{loanRepayment}</div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="usersHeader">Socials</div>
          <div className="row second">
            <div className="column">
              <div className="header">Twitter</div>
              <div className="data">{twitter}</div>
            </div>
            <div className="column">
              <div className="header">Facebook</div>
              <div className="data">{facebook}</div>
            </div>
            <div className="column">
              <div className="header">sector of employment</div>
              <div className="data">FinTech</div>
            </div>
            <div className="column">
              <div className="header">Instagram</div>
              <div className="data">{instagram}</div>
            </div>
          </div>
        </div>

        <div className="wrapper last">
          <div className="usersHeader">Guarantor</div>
          <div className="row second">
            <div className="column">
              <div className="header">Full Name</div>
              <div
                title={guarantorNameContent.length > 14 && guarantorNameContent}
                className="data"
              >
                {guarantorName}
              </div>
            </div>
            <div className="column">
              <div className="header">Phone Number</div>
              <div
                title={
                  guarantorPhoneNumberContent.length > 15 &&
                  guarantorPhoneNumberContent
                }
                className="data"
              >
                {guarantorPhoneNumber}
              </div>
            </div>
            <div className="column">
              <div className="header">Email Address</div>
              <div
                title={
                  guarantorEmailContent.length > 17 && guarantorEmailContent
                }
                className="data"
              >
                {guarantorEmail}
              </div>
            </div>
            <div className="column">
              <div className="header">Relationship</div>
              <div className="data">{sibling}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
