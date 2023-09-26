import { useState } from "react"
import Activity from "./Activity"
import Bills from "./Bills"
import LikeButton from "./LikeButton"



export default function Itinerary({ name, price, duration, tags, photo, admin_id, admin_photo, id }) {

    const [show, setShow] = useState(false)

    const bill = Math.floor(price);
    const time = Math.floor(duration / 60)
    

    return (
        <main>
            <div className="flex flex-col items-center justify-center mt-5 px-20">
                <div className="w-[350px] h-[850px] flex flex-grow flex-col items-center justify-start bg-slate-100 sm:w-[750px] flex-wrap">
                    <p className=" flex items-center justify-center mb-5 text-[28px] font-bold m-4">{name}</p>
                    <div className=" w-[350px] h-[500px] flex items-center justify-center sm:w-[650px]">
                        <img className="w-[350px] h-[500px] sm:w-[650px]" src={photo} alt="photo" />
                    </div>
                    <div className="flex w-[350px] h-[120px] mt-10 py-5 m-6 items-center justify-between sm:w-[650px]">
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px]">
                            <p className=" flex text-md font-bold">User:</p>
                            <img className="flex p-2 rounded-full w-[55px] h-[60px] sm:w-[90px] h-[80px]" src={admin_photo} alt="User" />
                            <p className=" flex text-center text-sm">{admin_id}</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[200px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Hashtags:</p>
                            <div className="flex flex-col items-center justify-start text-center text-sm">
                                {tags.map((tag, index) => (
                                    <span key={index} className=" text-black px-2 py-1 mb-2">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Duration:</p>
                            <p className=" flex items-center justify-start text-center text-sm">{time} Hs</p>
                        </div>
                        <div className="flex flex-col items-center justify-start p-2.5 w-[100px] h-[120px] ">
                            <p className=" flex items-center justify-start text-md font-bold">Price:</p>

                            <div>
                                <Bills bill={bill} />
                            </div>
                        </div>
                    </div>
                    <div className="flex sm:w-[650px] h-[40px] mt-5 p-5 items-center justify-between w-[350px] h-[40px]">
                        <LikeButton id={id}/>

                        {show ? (<div onClick={() => setShow(!show)} className=" sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></div>) : (<div onClick={() => setShow(!show)} className=" sm:flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></div>)}
                    </div>
                </div>
                {show && <Activity id={id} />}

            </div>
        </main>

    )
}