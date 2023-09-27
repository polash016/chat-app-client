import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/NavBar/NavBar";
// import axios from "axios";

const Main = () => {
  // axios.defaults.baseURL = 'http://localhost:5000';
  // axios.defaults.withCredentials = true;
  // const axiosSecure = axios.create({
  //     baseURL: "http://localhost:5000",
  //     withCredentials: true,
  //   });
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
