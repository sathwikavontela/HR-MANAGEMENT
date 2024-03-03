import './App.css'
import HomePage from './components/HomePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import AdminLogin from './components/Admin/AdminLogin'
import EmployeeLogin from './components/Employee/EmployeeLogin'
import ManagerLogin from './components/Manager/ManagerLogin'
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
