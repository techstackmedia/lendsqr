import "./UsersDetail.scss";

const UsersDetail = () => {
  return (
    <div
      className="usersCount"
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
              <div className="data">Grace Effiom</div>
            </div>
            <div className="column">
              <div className="header">Phone Number</div>
              <div className="data">07060780922</div>
            </div>
            <div className="column">
              <div className="header">Email Address</div>
              <div className="data">grace@gmail.com</div>
            </div>
            <div className="column">
              <div className="header">BVN</div>
              <div className="data">07060780922</div>
            </div>
            <div className="column">
              <div className="header">Gender</div>
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
              <div className="data">B.Sc</div>
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
              <div className="data">FinTech</div>
            </div>
            <div className="column">
              <div className="header">Duration of employment</div>
              <div className="data">2 years</div>
            </div>

            <div className="column">
              <div className="header">office email</div>
              <div className="data">grace@lendsqr.com</div>
            </div>

            <div
              className="column"
              style={{ position: "relative", right: 43, marginRight: 29 }}
            >
              <div className="header">Monthly income</div>
              <div className="data">₦200,000.00 - ₦400,000.00</div>
            </div>

            <div
              className="column"
              style={{ position: "relative", right: 112 }}
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
              <div className="data">Debby Ogana</div>
            </div>
            <div className="column" style={{ marginRight: 29 }}>
              <div className="header">Phone Number</div>
              <div className="data">07060780922</div>
            </div>
            <div className="column">
              <div className="header">Email Address</div>
              <div className="data">debby@gmail.com</div>
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
