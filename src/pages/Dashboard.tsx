import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import UsersCount from "../components/UsersCount/UsersCount";
import "./Dashboard.scss";
import UsersTable from "../components/UsersTable/UsersTable";

const Dashboard = () => {
  const { slug } = useParams();
  const slugText = `${slug?.toUpperCase()[0]}${slug?.slice(1)}`;

  return (
    <>
      <Navbar />
      <section className="DashboardURLSlug">
        <span>{slug ? `${slugText.replaceAll("-", " ")}` : "Users"}</span>
      </section>
      <div className="userCountSidebar">
        <UsersCount />
        <Sidebar />
      </div>
      <UsersTable />
    </>
  );
};

export default Dashboard;
