import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UsersCount from "../components/UsersCount/UsersCount";
import "./Dashboard.scss";
import UsersTable from "../components/UsersTable/UsersTable";
import Pagination from "../components/Pagination/Pagination";

const Dashboard = () => {
  const { slug } = useParams();
  const slugText = `${slug?.toUpperCase()[0]}${slug?.slice(1)}`;

  const splitByDashes = slugText.split("-");
  const dashboardHeader = splitByDashes
    .map((item) => {
      const text = `${item?.toUpperCase()[0]}${item?.slice(1)}`;
      return text;
    })
    .join(" ");

  return (
    <>
      <Navbar />
      <section className="DashboardURLSlug">
        <span>{slug ? dashboardHeader : "Users"}</span>
      </section>
      <div className="userCountSidebar">
        <UsersCount />
        <Sidebar />
      </div>
      <UsersTable />
      <Pagination />
    </>
  );
};

export default Dashboard;
