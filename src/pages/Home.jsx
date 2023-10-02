import { useState,useEffect } from "react"
import Carousel from "../components/Carousel"
import axios from "axios"
import apiUrl from '../../apiUrl.js'
import { Link as Anchor } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import city_actions from "../store/actions/cities"

const { read_carousel } = city_actions

export default function Home() {

    //const [show,setShow] = useState(true)
   // const [data,setData] = useState([])
    //const store = useSelector(store=>store)
    //console.log(store)
    //const city_reducer = useSelector(store=>store.cities)
    //console.log(city_reducer)
    const carousel = useSelector(store=>store.cities.carousel)  
    
    const dispatch = useDispatch()


    useEffect(
      ()=>{
        if(carousel.length === 0){
          dispatch(read_carousel())
        }
      
      },
      []
    ) 
    console.log(carousel);


    return (
      
        <main className=" m-5 grow p-10 mx-6 flex flex-raw justify-between bg-cover items-center flex-wrap" style={{ backgroundImage: `url(../img/index.jpg)` }}>
          
            <div className="w-full md:w-[35%]  flex-wrap">
                <h1 className="w-full text-[25px] md:text-[35px] font-extrabold mb-8 bg-gray-100">Find the perfect destination</h1>
                <p className=" w-full text-[25px] mb-8 md:text-[25px] lg:text-[35px] bg-gray-100">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
                <Anchor to="./cities" href="./" className="w-full px-10 bg-[#4F46E5] hover:bg-sky-200 hover:text-black p-2 rounded-lg text-white text-[25px]">View More</Anchor>
                
                
            </div>
          {/*  {show ? (<input onClick={()=> setShow(!show)} type="button" value="Hide"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded "/>) : (<input onClick={()=> setShow(!show)} type="button" value="Show"  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"/>)}
            
            {show ? <Carousel data={data} /> : <h1 className="text-[34px] text-center">Click View More</h1> }
          */}
         
            <Carousel data={carousel} />
          
            
        </main>
    )
}

 