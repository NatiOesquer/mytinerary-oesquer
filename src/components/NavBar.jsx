import { useState } from "react"

export default function NavBar() {
  let [show,setShow] = useState(false)
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'

  return (
    <header className="flex justify-between px-4 pt-2 border-[6px] m-10 items-center  ">
      <h1 className="font-bold font-medium text-3xl m-[50px]">{`${nombre1} ${nombre2}`}</h1>
      <nav className="flex sm:justify-end space-x-4">
        <a href="#" className="flex items-center font-bold font-medium px-3 py-2 w-[100px] text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900">Home</a>
        <a href="#" className="flex items-center font-bold font-medium px-3 w-[100px] py-2 text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900">Cities</a>
        <button className="rounded bg-[#4F46E5]">
          <a href="#" className="flex items-center gap-2 font-bold font-medium px-6 py-2 w-[159px] h-[64px] text-white hover:bg-blue-500 hover:text-slate-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>Login</a>

        </button>

      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24" 
           strokeWidth={1.5} 
           stroke="currentColor" 
           className="w-[60px] h-[60px] cursor-pointer rounded-xl bg-gray-200"
           onClick={()=>setShow(!show)}
           >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (
        <div className="flex ms-5 absolute top-[100px] right-[200px] flex-col gap-3 p-5 rounded bg-gray-400">
        <p className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">Home</p>
        <p className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">Cities</p>
        <p className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">LogIn</p>
      </div>
      ) : (null)}
      
    </header>
  )
}
