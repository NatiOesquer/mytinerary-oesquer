import Arrow from "./Arrow"
import CardPolaroid from "./CardPolaroid"
import { useState } from "react"


export default function Carousel({ data }) {

    let [counter, setCounter] = useState(0)
    let [counterTo, setCounterTo] = useState(4)
    function next_slide() {
        if (data.length <= counterTo) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter + 4)
            setCounterTo(counterTo + 4)
        }
        console.log(counter);
        console.log(counterTo);

    }
    function prev_slide(){
        if ( counter <= 0){
            setCounter(data.length-4)
            setCounterTo(data.length)
        }else{
            setCounter(counter-4)
            setCounterTo(counterTo-4)
        }
        console.log(counter);
        console.log(counterTo);
    }
    return (
             
        <div className="flex flex-col items-center w-[60%] flex-wrap">
            <p className="text-3xl font-extrabold mt-6 ">Popular MyTineraries!</p>
        <div className="flex justify-center items-center flex-wrap md:flex ">
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide}/>
            <div className="flex grid grid-cols-2 p-2 m-2 justify-center items-center">
                {data.slice(counter, counterTo).map(each => <CardPolaroid
                    key={each._id}
                    src={each.photo}
                    alt={each.id}
                    text={each.city} 
                    id={each.id}
                    />
                    )}
            </div>
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
            
        </div>
        </div>
    )
}

