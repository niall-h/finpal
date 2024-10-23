import { Link } from "react-router-dom";
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = ({}: Props) => {
  const { isLoggedIn, user, logoutUser } = useAuth();

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">Financial Tool Logo</Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="hidden lg:flex items-center space-x-6 text-back">
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
