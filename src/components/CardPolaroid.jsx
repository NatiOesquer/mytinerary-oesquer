import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({src,alt,text,id}) {
  return (
    <div  className="rounded-xl  flex flex-col  m-2 p-2 bg-cover bg-center" >
       <img className="rounded-xl sm:w-[300px] h-[180px] flex" src={src} alt={alt} />
        <p className="text-[20px] text-white md:text-black font-bold relative">{text}</p>
    </div>
  )
}
