import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";

function App() {
  return (
    <UserProvider>
      <div className="relative container mx-auto flex flex-col min-h-screen">
        <Navbar />
        <Outlet />
        <ToastContainer />
      </div>
    </UserProvider>
  );
}

export default App;
