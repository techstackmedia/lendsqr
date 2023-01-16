import { Link, useParams } from "react-router-dom";
import userProfileImg from "../../images/smiling-woman.png";
import notification from "../../images/notification.png";
import dropdown from "../../images/dropdown.png";
import search from "../../images/search.png";
import logo from "../../images/logo.png";
import "./Navbar.scss";
import menuBar from "../../images/menu-bar.svg";

const Navbar = () => {
  const menubarStyledComp = () => {
    const styles = {
      position: "absolute",
      right: 15,
      top: 20,
      cursor: "pointer",
    };
    return styles;
  };

  const menuStyle: any = menubarStyledComp();
  return (
    <>
      <img
        className="menu"
        style={menuStyle}
        src={menuBar}
        alt="menu bar icon"
        width={30}
        height={30}
      />
      <header className="navbar">
        <div>
          <img src={logo} alt="leadsqr logo" />
          <Link to="/">leadsqr</Link>
          <input
            type="search"
            name=""
            id="search"
            placeholder="Search for anything"
          />
          <button title="Get Result" type="submit">
            <img src={search} alt="search icon" />
          </button>
        </div>
        <div>
          <Link to="/documentation">Docs</Link>
          <img src={notification} alt="notification icon" />
          <img src={userProfileImg} alt="smiling woman user's profile" />
          <span>Adedeji</span>
          <img src={dropdown} alt="dropdown icon" />
        </div>
      </header>
    </>
  );
};

export default Navbar;
