import './App.css'
import HomePage from './components/HomePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import EmployeeLogin from './components/Employee/EmployeeLogin'
import ManagerLogin from './components/Manager/ManagerLogin'
import EmployeeHeader from './components/Employee/EmployeeHeader'
import EmployeeHome from './components/Employee/EmployeeHome'
import SalaryDetails from './components/Employee/SalaryDetails'
import ProjectDetails from './components/Employee/ProjectDetails'
import ProjectReport from './components/Employee/ProjectReport'
import LeaveReport from './components/Employee/LeaveReport'
const Applayout = () => {
  return (
    <div>
      <HomePage />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    Element: <Applayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/Adminlogin/',
        element: <AdminLogin />,
      },
      {
        path: '/employeeLogin/',
        element: <EmployeeLogin />,
      },
      {
        path: '/managerLogin/',
        element: <ManagerLogin />,
      },
      {
        path: '/employeeHomepage/',
        element: <EmployeeHome />,
      },
      {
        path: '/employeeSalaryDetails/',
        element: <SalaryDetails />,
      },
      {
        path: '/employeeProjectDetails',
        element: <ProjectDetails />,
      },
      {
        path: '/employeeProjectReport/',
        element: <ProjectReport />,
      },
      {
        path: '/employeeLeaveReport/',
        element: <LeaveReport />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
