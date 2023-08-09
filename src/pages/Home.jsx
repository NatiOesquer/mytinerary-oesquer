import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"

export default function Home() {

    const [show,setShow] = useState(true)
    const [data,setData] = useState([])

  /*  let data = [
        { id: 'america1', city: "Cancun", photo: "/img/america/cancun.jpg" },
        { id: 'america2', city: "New York", photo: "/img/america/newyork.jpg" },
        { id: 'america3', city: "Rio de Janeiro", photo: "/img/america/rioDeJaneiro.jpg" },
        { id: 'america4', city: "Ushuaia", photo: "/img/america/ushuaia.jpg" },
        { id: 'asia1', city: "Bangkok", photo: "/img/asia/bangkok.jpg" },
        { id: 'asia2', city: "Pekin", photo: "/img/asia/pekin.jpg" },
        { id: 'asia3', city: "Singapur", photo: "/img/asia/singapur.jpg" },
        { id: 'asia4', city: "Tokyo", photo: "/img/asia/tokio.jpg" },
        { id: 'europe1', city: "Ibiza", photo: "/img/europe/ibiza.jpg" },
        { id: 'europe2', city: "London", photo: "/img/europe/london.jpg" },
        { id: 'europe3', city: "Paris", photo: "/img/europe/paris.jpg" },
        { id: 'europe4', city: "Roma", photo: "/img/europe/roma.jpg" },
        { id: 'oceania1', city: "Majuro", photo: "/img/oceania/majuro.jpg" },
        { id: 'oceania2', city: "Sidney", photo: "/img/oceania/sidney.jpg" },
        { id: 'oceania3', city: "Suva", photo: "/img/oceania/suva.jpg" },
        { id: 'oceania4', city: "Wellington", photo: "/img/oceania/wellington.jpg" }
      ];*/

    useEffect(
      ()=>{
        axios('/data.json')
         .then(res=>setData(res.data))
         .catch(err=>console.log(err))
      },
      []
    ) 
    
    return (
        <main className="grow pt-10 mx-20 flex  justify-between items-center flex-wrap ">
            <div className="w-[25%] mr-[10px]">
                <h1 className="text-[45px] font-extrabold mb-8">Find the perfect destination</h1>
                <p className="mb-8 text-[30px]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <a href="#" className="px-10 bg-[#4F46E5]  p-2 rounded-lg text-white text-[25px]">View More</a>
                
                
            </div>
          {/*  {show ? (<input onClick={()=> setShow(!show)} type="button" value="Hide"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "/>) : (<input onClick={()=> setShow(!show)} type="button" value="Show"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"/>)}
            
            {show ? <Carousel data={data} /> : <h1 className="text-[34px] text-center">Click View More</h1> }
          */}
            <Carousel data={data} />
        </main>
    )
}

