import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import {
  MdOutlineNotifications,
  MdOutlineSearch,
  MdOutlineArrowDropDown,
} from "react-icons/md";
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
          <MdOutlineSearch size="24" color="#fff" />
        </button>
      </div>
      <div>
        <Link to="/documentation">Docs</Link>
        <MdOutlineNotifications size="24" color="#213F7D" />
        <img
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/394.jpg"
          alt="user's profile"
        />
        <span>Adedeji</span>
        <MdOutlineArrowDropDown size="24" />
      </div>
    </header>
  );
};

export default Navbar;
