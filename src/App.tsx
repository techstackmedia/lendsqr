import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";

function App() {
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
