

export default function CardPolaroid({src,alt,text}) {
  return (
    <div className="w-[40%] flex flex-col items-center p-2 m-2 bg-gray-400">
        <img src={src} alt={alt} />
        <p className="text-[20px]">{text}</p>
    </div>
  )
}
