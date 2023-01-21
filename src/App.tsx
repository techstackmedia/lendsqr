import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState<string>("100");
  const [buttonTextContent, setButtonTextContext] = useState<any>(1);

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

  const handleTextClick = (e: any) => {
    setText(e.target.textContent.replace("Rows", `${users?.length}`));
  };

  const handleClick = (event: any) => {
    const text = event.currentTarget.textContent;
      setButtonTextContext(+text);
  };  

  const goPreviousPage = () => {
    if (buttonTextContent > 1) {
      setButtonTextContext((prev: any) => {
        return prev - 1;
      });
    }
  };

  const goNextPage = () => {
    if (buttonTextContent < users.length / +text) {
      setButtonTextContext((prev: any) => {
        return prev + 1;
      });
    } else if (buttonTextContent > users.length / +text) {
      return setButtonTextContext(2)
    }
  };

  let sliceUsersList: any;
  if (buttonTextContent === 1 || buttonTextContent > users.length / +text) {
    sliceUsersList = users.slice(0, +text);
  } else {
    sliceUsersList = users.slice(
      (buttonTextContent - 1) * +text,
      buttonTextContent * +text
    );
  }

  const pages = Math.ceil(users?.length / sliceUsersList.length) + 1;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Dashboard
              text={text}
              handleTextClick={handleTextClick}
              users={users}
              sliceUsersList={sliceUsersList}
              handleClick={handleClick}
              goPreviousPage={goPreviousPage}
              goNextPage={goNextPage}
              buttonTextContent={buttonTextContent}
              pages={pages}
            />
          }
        />
        <Route
          path="/dashboard/:slug"
          element={
            <Dashboard
              text={text}
              handleTextClick={handleTextClick}
              users={users}
              sliceUsersList={sliceUsersList}
              handleClick={handleClick}
              goPreviousPage={goPreviousPage}
              goNextPage={goNextPage}
              buttonTextContent={buttonTextContent}
              pages={pages}
            />
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="dashboard/users/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
