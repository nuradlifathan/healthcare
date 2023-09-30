import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImage from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/Services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  return (
    <header className="header flex item-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src="" alt="HEALTHCARE" />
          </div>

          {/* Menu */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((val, i) => (
                <li key={i}>
                  <NavLink
                    to={val.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {val.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Right */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImage} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex item-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
