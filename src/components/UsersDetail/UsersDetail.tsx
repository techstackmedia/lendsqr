import "./UsersDetail.scss";

const UsersDetail = () => {
  let nameContent: any = "Grace Effiom";

  const textNameTruncate = () => {
    const textName = nameContent.split("");
    if (textName.length > 12) {
      textName.splice(12, textName.length - 12, "...");
      const textNameToString = textName.join("").replace("....", "...");
      return textNameToString;
    } else {
      return textName;
    }
  };

  const name = textNameTruncate();

  let guarantorNameContent: any = "Debby Ogana";

  const textGuarantorNameTruncate = () => {
    const textGuarantorName = guarantorNameContent.split("");
    if (textGuarantorName.length > 12) {
      textGuarantorName.splice(12, textGuarantorName.length - 12, "...");
      const textGuarantorNameToString = textGuarantorName
        .join("")
        .replace("....", "...");
      return textGuarantorNameToString;
    } else {
      return textGuarantorName;
    }
  };

  const guarantorName = textGuarantorNameTruncate();

  let phoneNumberContent: any = "070607809221234";

  const textPhoneNumberTruncate = () => {
    const textPhoneNumber = phoneNumberContent.split("");
    if (textPhoneNumber.length > 15) {
      textPhoneNumber.splice(15, textPhoneNumber.length - 15, "...");
      const textPhoneNumberToString = textPhoneNumber.join("");
      return textPhoneNumberToString;
    } else {
      return textPhoneNumber;
    }
  };

  const phoneNumber = textPhoneNumberTruncate();

  let guarantorPhoneNumberContent: any = "070607809221234";

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

  let bvnContent: any = "070607809221234";

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

  let emailContent: any = "grace@lendsqr.com";

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

  let guarantorEmailContent: any = "grace@lendsqr.com";

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

  let monthlyIncomeContent: any = "₦200,000.00 - ₦400,000.00";

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

  let educationLevelContent: any = "B.SC";

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

  let officeEmailContent: any = "grace@lendsqr.com";

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

  let employmentSectionContent: any = "FinTech";

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
              <div title={nameContent > 12 && nameContent} className="data">
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
              <div className="header" style={{ marginRight: -73 }}>
                Gender
              </div>
              <div className="data">Female</div>
            </div>

            <div className="column">
              <div className="header">Marital status</div>
              <div className="data">Single</div>
            </div>

            <div className="column">
              <div className="header">Children</div>
              <div className="data">None</div>
            </div>

            <div className="column" style={{ position: "relative", left: 49 }}>
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
            <div
              className="column"
              style={{ position: "relative", right: 18, marginRight: 29 }}
            >
              <div className="header">employment status</div>
              <div className="data">Employed</div>
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
              <div className="data">2 years</div>
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

            <div
              className="column"
              style={{ position: "relative", right: 43, marginRight: 29 }}
            >
              <div className="header">Monthly income</div>
              <div
                title={monthlyIncomeContent.length > 41 && monthlyIncomeContent}
                className="data"
              >
                {monthlyIncome}
              </div>
            </div>

            <div
              className="column"
              style={{ position: "relative", right: 110 }}
            >
              <div className="header">loan repayment</div>
              <div className="data">40,000</div>
            </div>
          </div>
        </div>

        <div className="wrapper">
          <div className="usersHeader">Socials</div>
          <div className="row second">
            <div className="column">
              <div className="header">Twitter</div>
              <div className="data">@grace_effiom</div>
            </div>
            <div className="column" style={{ position: "relative", right: 9 }}>
              <div className="header">Facebook</div>
              <div className="data">Grace Effiom</div>
            </div>
            <div className="column">
              <div className="header">sector of employment</div>
              <div className="data">FinTech</div>
            </div>
            <div className="column">
              <div className="header">Instagram</div>
              <div className="data">@grace_effiom</div>
            </div>
          </div>
        </div>

        <div className="wrapper last">
          <div className="usersHeader">Guarantor</div>
          <div className="row second">
            <div className="column">
              <div className="header">Full Name</div>
              <div
                title={guarantorNameContent.length > 12 && guarantorNameContent}
                className="data"
              >
                {guarantorName}
              </div>
            </div>
            <div className="column" style={{ marginRight: 29 }}>
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
            <div className="column" style={{ position: "relative", left: 13 }}>
              <div className="header">Relationship</div>
              <div className="data">Sister</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersDetail;
