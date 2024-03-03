import React from 'react'

const HomePage = () => {
  return (
    <div className="mx-2 h-screen ">
      <div className="flex justify-between border-3 border bg-white rounded-2xl shadow-2xl my-4">
        <div>
          <img
            src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30165846/1843.png"
            className="w-[85px] bg-black"
            alt="This is hr logo"
          />
        </div>
        <ul className="flex justify-between px-10 py-4 text-center mt-1">
          <li className="px-3 text-xl">Home</li>
          <li className="px-3 text-xl">Employee</li>
          <li className="px-3 text-xl">Manager</li>
          <li className="px-3 text-xl">Admin</li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
