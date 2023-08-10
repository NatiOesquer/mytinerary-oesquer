import { useState } from "react"
import { Link as Anchor } from "react-router-dom"

export default function NavBar() {
  let [show, setShow] = useState(false)
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'

  return (
    <header className="flex justify-between px-4 pt-2 border-[6px] m-10 items-center  ">
      <h1 className="font-bold font-medium text-3xl m-[50px]">{`${nombre1} ${nombre2}`}</h1>
      <nav className="flex sm:justify-end space-x-4">
        <Anchor to='/home' href="#" className="flex items-center font-bold font-medium px-3 py-2 w-[100px] text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900">Home</Anchor>
        <Anchor to='/cities' href="#" className="flex items-center font-bold font-medium px-3 w-[100px] py-2 text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900">Cities</Anchor>
        <button className="rounded bg-[#4F46E5]">
          <Anchor to='/login' href="#" className="flex items-center gap-2 font-bold font-medium px-6 py-2 w-[159px] h-[64px] text-white hover:bg-blue-500 hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>Login</Anchor>

        </button>

      </nav>
      <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[60px] h-[60px] cursor-pointer rounded-xl bg-gray-200"
        onClick={() => setShow(!show)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (
        <div className="flex ms-5 absolute top-[100px] right-[200px] flex-col gap-3 p-5 rounded bg-gray-400">
          <Anchor to='/home' className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">Home</Anchor>
          <Anchor to='/cities' className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">Cities</Anchor>
          <Anchor to='/login' className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">LogIn</Anchor>
        </div>
      ) : (null)}

    </header>
  )
}
