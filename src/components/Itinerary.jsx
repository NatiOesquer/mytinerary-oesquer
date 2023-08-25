

export default function Itinerary() {
  return (
    <div className="flex justify-center items-center p-10 m-10 flex-wrap">

                <div className="rounded-xl w-[750px] flex-col flex h-[700px] bg-slate-300  justify-start items-center" >
                    <h3 className="text-[20px] font-bold relative flex items-center justify-center m-4">Itinerary Title</h3>
                    <div className="w-[650px] h-[500px] flex justify-center items-center bg-slate-500">
                        <img className="rounded-xl w-[300px] h-[75px]" />
                    </div>
                    <div className="flex w-[650px] h-[40px]  m-10 justify-between items-center p-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>


                    </div>
                </div>
                
            </div>

  )
}
