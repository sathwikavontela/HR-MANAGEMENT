import "./App.css";
import HomePage from "./components/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import EmployeeLogin from "./components/Employee/EmployeeLogin";
import ManagerLogin from "./components/Manager/ManagerLogin";
import AdminBrowse from "./components/Admin/AdminBrowse";
import AdminEmployees from "./components/Admin/AdminEmployees";
import AdminAddSalary from "./components/Admin/AdminAddSalary";
import AdminAddProject from "./components/Admin/AdminAddProject";
import AdminSalaryDetails from "./components/Admin/AdminSalaryDetails";
import AdminProjectDetails from "./components/Admin/AdminProjectDetails";
import AdminProjectReport from "./components/Admin/AdminProjectReport";
import AdminLeaveReport from "./components/Admin/AdminLeaveReport";
const Applayout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    Element: <Applayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Adminlogin/",
        element: <AdminLogin />,
      },
      {
        path: "/employeeLogin/",
        element: <EmployeeLogin />,
      },
      {
        path: "/managerLogin/",
        element: <ManagerLogin />,
      },
      {
        path: "/admin",
        element: <AdminBrowse />,
      },
      {
        path: "/admin/employees",
        element: <AdminEmployees />,
      },
      {
        path: "/admin/addsalary",
        element: <AdminAddSalary />,
      },
      {
        path: "/admin/addproject",
        element: <AdminAddProject />,
      },
      {
        path: "/admin/salarydetails",
        element: <AdminSalaryDetails />,
      },
      {
        path: "/admin/projectdetails",
        element: <AdminProjectDetails />,
      },
      {
        path: "/admin/projectreport",
        element: <AdminProjectReport />,
      },
      {
        path: "/admin/leavereport",
        element: <AdminLeaveReport />,
      },
      {
        path: "/Adminlogin/",
        element: <AdminLogin />,
      },
      {
        path: "/employeeLogin/",
        element: <EmployeeLogin />,
      },
      {
        path: "/managerLogin/",
        element: <ManagerLogin />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
