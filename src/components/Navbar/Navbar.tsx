import { Link } from "react-router-dom";
import notification from "../../images/notification.png";
import dropdown from "../../images/dropdown.png";
import search from "../../images/search.png";
import logo from "../../images/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="navbar">
      <div>
        <img src={logo} alt="leadsqr logo" />
        <span>leadsqr</span>
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
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg"
          alt="user's profile"
        />
        <span>Adedeji</span>
        <img src={dropdown} alt="dropdown icon" />
      </div>
    </header>
  );
};

export default Navbar;
