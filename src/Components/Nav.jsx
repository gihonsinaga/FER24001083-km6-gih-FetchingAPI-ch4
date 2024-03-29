import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = ({ handleSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  const activeStyle = {
    borderBottom: "2px solid white",
  };

  //mobile web
  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true} onClick={() => navigate("/")}>
          <li className="my-4 py-4 font-poppins  border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Home
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Figures")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Figures
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Cards")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Cards
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Series")}>
          <li className="my-4 py-4  font-poppins   border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Series
          </li>
        </Link>
        <Link spy={true} smooth={true} onClick={() => navigate("/Games")}>
          <li className="my-4 py-4 font-poppins  border-b border-slate-800 hover:bg-slate-800 hover:rounded">
            Games{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
  return (
    // pc web
    <nav>
      <div className="nav flex container-full bg-black fixed top-0 w-full justify-between h-10vh z-50 text-white px-20 py-8 flex-1">
        <div className="flex bg-white justify-center w-[350px] rounded-full">
          <input
            type="text"
            placeholder="Search ..."
            onChange={handleSearch}
            className="text-black justify-start rounded-lg p-2 outline-none"
          />
        </div>

        <div className="mt-3 lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10 font-poppins">
            <ul className="flex gap-10 mr-16 text-[18px]">
              <Link
                className="link"
                style={isActive("/") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition cursor-pointer"
                >
                  Home
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Figures") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Figures")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Figures
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Cards") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Cards")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Cards
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Series") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Series")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Series
                </li>
              </Link>
              <Link
                className="link"
                style={isActive("/Games") ? activeStyle : null}
                spy={true}
                smooth={true}
                onClick={() => navigate("/Games")}
              >
                <li
                  style={isActive("/") ? activeStyle : null}
                  className="font-poppins font-base text-lg  transition border-b-2 border-transparent hover:border-white cursor-pointer"
                >
                  Games
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {" "}
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
