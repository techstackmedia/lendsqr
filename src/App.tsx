import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";
import menuBar from "./images/menu-bar.svg";

function App() {
  const { slug } = useParams();
  const slugText = `${slug?.toUpperCase()[0]}${slug?.slice(1)}`;
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
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsersAPI = async () => {
      const response = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsersAPI();
  }, []);

  return (
    <BrowserRouter>
      <img
        className="menu"
        style={menuStyle}
        src={menuBar}
        alt="menu bar icon"
        width={30}
        height={30}
      />
      <Routes>
        <Route path="/dashboard" element={<Dashboard users={users} />} />
        <Route path="/dashboard/:slug" element={<Dashboard users={users} />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard/users/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
