import "./Sidebar.scss";
import switchOrganization from "../../images/switch-organization.png";
import keyDropDown from "../../images/keydropdown.png";
import dashboard from "../../images/dashboard.png";
import logout from "../../images/logout.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  // const { slug } = useParams();
  // const initialChar = slug?.toUpperCase()[0];
  // const slicer = slug?.slice(1);
  // const slugUrl = `${initialChar}${slicer}`;
  // console.log(slugUrl);

  const navigate = useNavigate();

  const dashboardCustomersList = [
    "Users",
    "Guarantors",
    "Loans",
    "Decision Models",
    "Savings",
    "Loan Requests",
    "Whitelists",
    "Karma",
  ];

  const dashboardBusinessesList = [
    "Organization",
    "Loan Requests",
    "Savings Products",
    "Fees and Charges",
    "Transactions",
    "Services",
    "Service Account",
    "Settlements",
    "Reports",
  ];

  const dashboardSettingsList = [
    "Preferences",
    "Fees and Pricing",
    "Audit Logs",
    "Systems Messages",
  ];

  const onClick = () => {
    navigate(`/dashboard/logout`);
  };

  const dashboardCustomerItems = dashboardCustomersList.map((item: any) => {
    const onClick = () => {
      navigate(`/dashboard/${item.toLowerCase().replaceAll(" ", "-")}`);
    };
    return (
      <div onClick={onClick} key={item}>
        <img
          src={require(`../../images/${item
            .toLowerCase()
            .replaceAll(" ", "-")}.png`)}
          alt={`${item.toLowerCase()} icon`}
        />
        <span>{item}</span>
      </div>
    );
  });

  const dashboardBusinessesItems = dashboardBusinessesList.map((item: any) => {
    const onClick = () => {
      navigate(`/dashboard/${item.toLowerCase().replaceAll(" ", "-")}`);
    };

    return (
      <div onClick={onClick} key={item}>
        <img
          src={require(`../../images/${item
            .toLowerCase()
            .replaceAll(" ", "-")}.png`)}
          alt={`${item.toLowerCase()} icon`}
        />
        <span>{item.replace("Requests", "Products")}</span>
      </div>
    );
  });

  const dashboardSettingsItems = dashboardSettingsList.map((item: any) => {
    const onClick = () => {
      navigate(`/dashboard/${item.toLowerCase().replaceAll(" ", "-")}`);
    };
    return (
      <div onClick={onClick} key={item}>
        <img
          src={require(`../../images/${item
            .toLowerCase()
            .replaceAll(" ", "-")}.png`)}
          alt={`${item.toLowerCase()} icon`}
        />
        <span>{item.replace("Requests", "Products")}</span>
      </div>
    );
  });

  const dashboardLogOut = (
    <div onClick={onClick} style={{ marginBottom: 20 }}>
      <img src={logout} alt="logout icon" />
      <span>Logout</span>
    </div>
  );

  return (
    <aside className="dashboard">
      <div className="dashboard__position">
        <div>
          <img src={switchOrganization} alt="suit case icon" />
          <span>Switch Organization</span>
          <img src={keyDropDown} alt="dropdown icon" />
        </div>
        <div>
          <img src={dashboard} alt="home icon" />
          <span>Dashboard</span>
        </div>
        <p>Customers</p>
        {dashboardCustomerItems}
        <p>Businesses</p>
        {dashboardBusinessesItems}
        <p>Settings</p>
        {dashboardSettingsItems}
        <hr />
        {dashboardLogOut}
        <span className="version">v1.2.0</span>
      </div>
    </aside>
  );
};

export default Sidebar;
