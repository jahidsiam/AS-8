import { NavLink } from "react-router-dom";

const Navber = () => {
  return (
    <div>
      <div className="navbar bg-base-100 workSans container m-auto mt-2">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                    isActive
                      ? "  border-[#23BE0A] text-[#23BE0A]    "
                      : "text-gray-700 border-transparent"
                  }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="listedbooks"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                    isActive
                      ? "  border-[#23BE0A] text-[#23BE0A]    "
                      : "text-gray-700 border-transparent"
                  }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
                }
              >
                <li>Listed Books</li>
              </NavLink>
              <NavLink
                to="pagestoread"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                    isActive
                      ? "  border-[#23BE0A] text-[#23BE0A]    "
                      : "text-gray-700 border-transparent"
                  }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
                }
              >
                <li>Pages to Read</li>
              </NavLink>
              <NavLink
                to="author"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                    isActive
                      ? "  border-[#23BE0A] text-[#23BE0A]    "
                      : "text-gray-700 border-transparent"
                  }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
                }
              >
                <li>Writers</li>
              </NavLink>
              <NavLink
                to="topreads"
                className={({ isActive }) =>
                  ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                    isActive
                      ? "  border-[#23BE0A] text-[#23BE0A]    "
                      : "text-gray-700 border-transparent"
                  }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
                }
              >
                <li>Top Reads</li>
              </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                  isActive
                    ? "  border-[#23BE0A] text-[#23BE0A]    "
                    : "text-gray-700 border-transparent"
                }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="listedbooks"
              className={({ isActive }) =>
                ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                  isActive
                    ? "  border-[#23BE0A] text-[#23BE0A]    "
                    : "text-gray-700 border-transparent"
                }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
              }
            >
              <li>Listed Books</li>
            </NavLink>
            <NavLink
              to="pagestoread"
              className={({ isActive }) =>
                ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                  isActive
                    ? "  border-[#23BE0A] text-[#23BE0A]    "
                    : "text-gray-700 border-transparent"
                }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
              }
            >
              <li>Pages to Read</li>
            </NavLink>
            <NavLink
              to="author"
              className={({ isActive }) =>
                ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                  isActive
                    ? "  border-[#23BE0A] text-[#23BE0A]    "
                    : "text-gray-700 border-transparent"
                }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
              }
            >
              <li>Writers</li>
            </NavLink>
            <NavLink
              to="topreads"
              className={({ isActive }) =>
                ` py-2 pr-4 pl-3 duration-200 rounded-lg ${
                  isActive
                    ? "  border-[#23BE0A] text-[#23BE0A]    "
                    : "text-gray-700 border-transparent"
                }   hover:bg-gray-50 lg:hover:bg-transparent  border hover:text-[#23BE0A]  font-bold`
              }
            >
              <li>Top Reads</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-1">
          <a className="btn bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
