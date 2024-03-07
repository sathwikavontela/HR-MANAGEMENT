import React from "react";
import AdminHeader from "./AdminHeader";

const AdminEmployees = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex m-5 justify-center ">
        <img
          className="w-7 my-2"
          src="https://cdn-icons-png.flaticon.com/128/2476/2476725.png"
          alt="employee logo"
        />
        <p className="my-3 ml-1">Employee List</p>
      </div>
    </div>
  );
};

export default AdminEmployees;
