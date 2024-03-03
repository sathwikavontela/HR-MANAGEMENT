import React from 'react'
import { Link } from 'react-router-dom'
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
            {' '}
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
      <div className="flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg?w=900&t=st=1709465615~exp=1709466215~hmac=42e471aa2ccc2f93994efaf36e93c2051a7fd0a5193d3b6692332b5ccbf0a794"
          className="w-[55%]"
          alt="this is homepage logo"
        />
      </div>
    </div>
  )
}

export default HomePage
