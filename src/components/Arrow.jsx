

export default function Arrow({ direction,onClick }) {
   
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="w-[30px] h-[30px] cursor-pointer bg-white font-bold"
        onClick={onClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d={direction} />
    </svg>
    
    


  )
}
