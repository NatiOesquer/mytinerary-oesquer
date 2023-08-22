import { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import apiUrl from '../apiUrl'
import CardCity from '../components/CardCity'

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
      <div className='w-full relative'>
          <img className='w-full' src="../../img/welcome.jpg" alt="" />
          <div className='flex flex-col justify-center w[500px] absolute top-2/3 left-1/3 items-center'>
            <p className='text-5xl '>Cities</p>
            <p className='text-3xl '>Collection of the most beatiful places and experience</p>

          </div>

      </div>

      <input ref={text} type='text' name='text' id='text' onKeyUp={handlerFilter}/>
      {cities.map(each=><CardCity key={each._id} src={each.photo} alt={each._id} text={each.city} id={each._id} />)}

    </main>
      
      
    
  )
}
