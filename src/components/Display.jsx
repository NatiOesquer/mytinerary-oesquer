import { Link as Anchor } from "react-router-dom"

export default function Display({ options }) {
  return (
    <div className="flex ms-5 absolute top-[100px] right-[200px] flex-col gap-3 p-5 rounded bg-gray-400">
    {options.map(each=> 
    <Anchor 
    key={each.to} 
    to={each.to} 
    className="text-[20px] px-2 bg-gray-200 rounded-xl w-[100px] text-center mx-1">
    {each.title}</Anchor> )}
    
    
  </div>
  )
}
