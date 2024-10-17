import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
