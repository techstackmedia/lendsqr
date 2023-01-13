import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import arrowLeft from "../images/arrow-left.png";
import UsersTier from "../components/UsersTier/UsersTier";

const Detail = () => {
  const navigate = useNavigate();
  const previousPage = () => {
    navigate("/dashboard/users");
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: 190 }}>
        <section style={{ position: "relative", marginTop: "150px" }}>
          <button
            onClick={previousPage}
            style={{
              marginLeft: 26,
              backgroundColor: "transparent",
              border: 0,
              position: "relative",
              top: -20,
              cursor: "pointer",
            }}
          >
            <img src={arrowLeft} alt="long arrow left icon" />
            <span style={{ color: "#545F7D", marginLeft: 10 }}>
              Back to Users
            </span>
          </button>
        </section>
        <section
          className="DashboardURLSlug"
          style={{
            marginTop: "6px",
            color: "#545F7D",
          }}
        >
          <span className="span">Users Details</span>
        </section>
      </div>
      <div className="userCountSidebar">
        <UsersTier />
        <Sidebar />
      </div>
    </>
  );
};

export default Detail;
