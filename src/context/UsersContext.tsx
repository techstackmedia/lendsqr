import { createContext, useEffect, useState } from "react";

const UsersContext = createContext<any>({} as any);

const UsersProvider = ({ children }: any) => {
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
      return setButtonTextContext(2);
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

  const [state, setState] = useState(true);
  const [userList, setUserList] = useState<any>([]);
  const [showFilter, setShowFilter] = useState(true);
  const onClick = (id: any) => {
    if (state) {
      const filterUserList = users.filter((item: any) => item.id === id);
      setUserList(filterUserList);
      setState((prev) => {
        return !prev;
      });
    }
  };
  const onMouseLeave = () => {
    if (state === false) {
      setState(true);
    }
  };
  const filterInput = () => {
    setShowFilter((prev) => {
      return !prev;
    });
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        text,
        buttonTextContent,
        sliceUsersList,
        handleTextClick,
        handleClick,
        goPreviousPage,
        goNextPage,
        pages,
        state,
        userList,
        showFilter,
        onClick,
        onMouseLeave,
        filterInput,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
export { UsersProvider };
