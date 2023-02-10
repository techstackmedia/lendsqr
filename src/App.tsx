import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import { UsersProvider } from "./context/UsersContext";

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:slug" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="dashboard/users/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
