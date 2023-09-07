import { useState } from "react"
import { Link as Anchor } from "react-router-dom"
import Display from "./Display"
import Label from "./Label"
import IconLogin from "./IconLogin"

export default function NavBar() {
  let [show, setShow] = useState(false)
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'
  let options = [
    {to:"/", title:"Home"},
    {to:"/cities", title:"Cities"},
    {
      to:"/auth/signin", 
      title:"Login",
      icon:<IconLogin />,
      backgroundColor:"#4F46E5",
      color:"white"},
  ]

  return (
    <header className="flex justify-between px-4 pt-2 border-[6px] m-10 items-center  ">
      <h1 className="font-bold font-medium text-3xl m-[50px] hidden md:flex ">{`${nombre1} ${nombre2}`}</h1>
      <nav className="flex sm:justify-end space-x-4">
    
        <Label options={options} />
        <svg xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[60px] h-[60px] cursor-pointer rounded-xl bg-gray-200 md:hidden"
        onClick={() => setShow(!show)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      {show ? (
        <Display options={options} />
      ) : (null)} 
      </nav>
     

    </header>
  )
}
