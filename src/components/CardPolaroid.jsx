import { Link as Anchor } from "react-router-dom"

export default function CardPolaroid({src,alt,text,id}) {
  return (
    <Anchor to={'/city/'+id} className="w-[40%] flex flex-col items-center p-2 m-2 rounded-xl bg-gray-400">
        <img src={src} alt={alt} />
        <p className="text-[20px] font-bold">{text}</p>
    </Anchor>
  )
}
