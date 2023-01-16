import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UsersCount from "../components/UsersCount/UsersCount";
import "./Dashboard.scss";
import UsersTable from "../components/UsersTable/UsersTable";
import Pagination from "../components/Pagination/Pagination";
import Spinner from "../components/Spinner/Spinner";
import menuBar from "../images/menu-bar.svg";

const Dashboard = ({ users }: any) => {
  const { slug } = useParams();
  const slugText = `${slug?.toUpperCase()[0]}${slug?.slice(1)}`;

  const splitByDashes = slugText.split("-");
  const dashboardHeader = splitByDashes
    .map((item) => {
      const text = `${item?.toUpperCase()[0]}${item?.slice(1)}`;
      return text;
    })
    .join(" ");

  const menubarStyledComp = () => {
    let styles: any;
    if (slugText === "Login" || slugText === "") {
      styles = {
        display: "none",
      };
    } else {
      styles = {
        position: "absolute",
        right: 15,
        top: 20,
        cursor: "pointer",
      };
    }
    return styles;
  };
  const menuStyle = menubarStyledComp();

  return (
    <>
      {users?.length !== 0 ? (
        <>
          <img
            className="menu"
            style={menuStyle}
            src={menuBar}
            alt="menu bar icon"
            width={30}
            height={30}
          />
          <Navbar />
          <section className="DashboardURLSlug">
            <span>{slug ? dashboardHeader : "Users"}</span>
          </section>
          <div className="userCountSidebar">
            <UsersCount />
            <Sidebar />
          </div>
          <UsersTable users={users} />
          <Pagination users={users} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Dashboard;
