import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";
import logo from "./finpal-high-resolution-logo-transparent.png";

interface Props {}

const Navbar = ({}: Props) => {
  const { isLoggedIn, user, logoutUser } = useAuth();

  return (
    <nav className="sticky h-30 p-6 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img className="flex w-48" src={logo} alt="finpal logo" />
          </Link>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            {/* <div className="hidden font-bold lg:flex">
              <Link to="/search" className="text-black hover:text-darkBlue">
                Search
              </Link>
            </div> */}
            <div>Welcome, {user?.userName}</div>
            <button
              onClick={logoutUser}
              className="px-8 py-3 font-bold rounded text-white bg-darkBlue hover:opacity-70"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-darkBlue hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
