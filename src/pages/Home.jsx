import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"

export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([])

  
    useEffect(
      ()=>{
        axios('/data.json')
         .then(res=>setData(res.data))
         .catch(err=>console.log(err))
      },
      []
    ) 
    
    return (
        <main className="grow pt-10 mx-20 flex  justify-between items-center flex-wrap bg-[url(./img/index.jpg)] bg-cover">
            <div className="w-[25%] mr-[10px] ">
                <h1 className="text-[45px] font-extrabold mb-8 bg-gray-100">Find the perfect destination</h1>
                <p className="mb-8 text-[30px] bg-gray-100">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <a href="#" className="px-10 bg-[#4F46E5] hover:bg-sky-200 hover:text-black p-2 rounded-lg text-white text-[25px]">View More</a>
                
                
            </div>
          {/*  {show ? (<input onClick={()=> setShow(!show)} type="button" value="Hide"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "/>) : (<input onClick={()=> setShow(!show)} type="button" value="Show"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"/>)}
            
            {show ? <Carousel data={data} /> : <h1 className="text-[34px] text-center">Click View More</h1> }
          */}
            <Carousel data={data} />
        </main>
    )
}

