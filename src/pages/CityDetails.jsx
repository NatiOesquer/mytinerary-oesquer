import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import apiUrl from "../apiUrl"
import { Link as Anchor } from "react-router-dom"
import NotFoundItinerary from "../components/NotFoundItinerary"
import Features from "../components/Features"
import Itinerary from "../components/Itinerary"
import { useDispatch,useSelector } from "react-redux"
import city_actions from "../store/actions/cities"
const {read_city } = city_actions




export default function CityDetails() {
    const { city_id } = useParams()
    //const [city, setCity] = useState([])
    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(read_city({ id: city_id }))
        }, []
    )

    const city = useSelector(store=> store.cities.city)
    //console.log(city)

    return (
        <>
            <div className=" h-[600px] grow flex flex-col items-center justify-center bg-no-repeat bg-center md:flex-wrap" style={{ backgroundImage: `url(${city.photo})` }}>
                <div className="flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-black">
                    <h1 className="bg-stone-400 p-2 rounded-xl">{city.city}</h1>
                </div>
                <div className="flex flex-col justify-center items-center" >
                    <p className="text-white  font-semibold flex mt-2 "><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.69008 16.932L6.69288 16.9333C6.89 17.019 7 16.999 7 16.999C7 16.999 7.11 17.019 7.30791 16.9329L7.30992 16.932L7.31565 16.9294L7.33381 16.921C7.34884 16.9141 7.36967 16.9043 7.39591 16.8916C7.44837 16.8663 7.52255 16.8296 7.61533 16.7812C7.80078 16.6845 8.06121 16.5409 8.37166 16.3485C8.99123 15.9645 9.81736 15.3816 10.6455 14.5834C12.3022 12.9866 14 10.4915 14 6.99902C14 3.13303 10.866 -0.000976562 7 -0.000976562C3.13401 -0.000976562 0 3.13303 0 6.99902C0 10.4915 1.69783 12.9866 3.35452 14.5834C4.18264 15.3816 5.00877 15.9645 5.62834 16.3485C5.93879 16.5409 6.19922 16.6845 6.38467 16.7812C6.47745 16.8296 6.55163 16.8663 6.60409 16.8916C6.63033 16.9043 6.65116 16.9141 6.66619 16.921L6.68435 16.9294L6.69008 16.932ZM7 9.24902C8.24264 9.24902 9.25 8.24166 9.25 6.99902C9.25 5.75638 8.24264 4.74902 7 4.74902C5.75736 4.74902 4.75 5.75638 4.75 6.99902C4.75 8.24166 5.75736 9.24902 7 9.24902Z" fill="white" />
                    </svg>{city.country}</p>
                </div>
                <div className="flex flex-col w-[300px] justify-center items-center p-8" >
                    <p className="  text-white font-semibold flex mt-2 text-center bg-stone-500 rounded-3xl shadow-2xl md:w-[600px] md:flex-wrap">{city.smalldescription}</p>
                </div>
                <div className="flex pt-[50px] items-end justify-center">
                    <Anchor to={'/cities'} className="rounded-md bg-[#4F46E5] hover:bg-sky-600 text-white text-xl text-center items-center cursor-pointer w-[200px] h-13 ml-10 p-3">View More</Anchor>
                </div>
            </div>
            <NotFoundItinerary />
            <Features />
            <Itinerary />

            <div className="flex justify-center items-center">
            <div className="flex flex-col w-[750px] h-[700px]  items.center  bg-slate-300">
                <div className=" flex flex-col ">
                    <p className=" text-[20px] ">User:</p>
                    <div>
                        <img src="../img/perfil.png" alt="" />
                        <p className="text-[10px]">Lucas Silva</p>
                    </div>
                </div>
                <div className=" flex flex-col ">
                    <p>Hashtag:</p>
                    <p>#LucasSilvaInTheTravel(?)</p>
                </div>
                <div className=" flex flex-col ">
                    <p>Duration:</p>
                    <p>1 week</p>
                </div>
                <div className=" flex flex-col ">
                    <p>Price:</p>
                    <p>400 usd</p>
                </div>
            </div>
            </div>
           

        </>
    )
}