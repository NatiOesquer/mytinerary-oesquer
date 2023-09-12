import { Link as Anchor } from "react-router-dom"

export default function Label({ options }) {
  
  return (
    <div className=" hidden md:flex gap-2  rounded-xl">
    {options.map(each=> 
    <Anchor key={each.to} to={each.to} 
    className="flex items-center md:font-bold gap-2 bg-white  font-medium px-3 py-2 w-[100px] text-slate-700 rounded-lg hover:bg-blue-300 hover:text-slate-900" 
    style={{backgroundColor:each.backgroundColor,color:each.color}}>
      {each.icon}
      {each.title}
      </Anchor> )}
    
    </div>
  )
  
}
