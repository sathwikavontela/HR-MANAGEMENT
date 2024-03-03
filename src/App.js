import './App.css'
import HomePage from './components/HomePage'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
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
