import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'
import NotFoundCard from '../components/NotFoundCard'

export default function Cities() {
const [cities,setCities] = useState([])
const [reEffect,setReEffect] = useState(true)
const text = useRef()
  useEffect(
    ()=>{
      axios(apiUrl+'cities?city='+text.current.value)
        //.then(res=>console.log(res.data.response))
        .then(res=>setCities(res.data.response))
        .catch(err=>console.log(err))
    },[reEffect]
  )

  function handlerFilter(){
      console.log(text.current.value)
      setReEffect(!reEffect)
  }
  return (
    <main className='flex flex-col grow'>
      <div className='h-[30vh] bg-cover bg-center justify-center items-center flex'
      style={{backgroundImage:`url(./img/welcome.jpg)`}}>
         
         <div className='flex flex-col justify-center w[20px] items-center'>
            <p className='text-5xl '>Cities</p>
            <p className='text-3xl '>Collection of the most beatiful places and experience</p>
          </div>
      </div>
      <div className="w-auto bg-slate-200 items-center justify-center">
        <div className='max-w-md mx-auto mt-6'>
          <div className="relative  my-2 p-5 flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input ref={text} type='text' name='text' id='text' onKeyUp={handlerFilter}/>
          </div>
          
        </div>
       
                    <div className="grid gap-2 grid-cols-1 flex justify-items-center
        md:grid-cols-2
        lg:grid-cols-3
        2xl:grid-cols-4'">        
                    {cities.length != 0 ?cities.map(city=> (<CardCity key={city._id} text={city.city} src={city.photo} id={city._id} />
    )) :<div><NotFoundCard /></div>  }
   </div>
          </div>
    
     
     

    </main>
      
      
    
  )
}
