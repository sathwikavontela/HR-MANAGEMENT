import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className=" h-[100%]">
      <div className="flex justify-between border-3 border bg-white rounded-2xl ">
        <div>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165846/1843.png"
            className="w-[85px] "
            alt="This is hr logo"
          />
        </div>
        <ul className="flex justify-between px-10 py-4 text-center mt-1">
          <Link to="/">
            {" "}
            <li className="px-3 text-xl font-sans font-semibold">Home</li>
          </Link>

          <Link to="/employeeLogin/">
            <li className="px-3 text-xl font-sans font-semibold">Employee</li>
          </Link>
          <Link to="/managerLogin/">
            <li className="px-3 text-xl font-sans font-semibold">Manager</li>
          </Link>
          <Link to="/Adminlogin/">
            <li className="px-3 text-xl font-sans font-semibold">Admin</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
