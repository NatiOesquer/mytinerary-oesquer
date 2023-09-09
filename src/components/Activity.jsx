
import { useSelector, useDispatch } from "react-redux"
import activity_actions from "../store/actions/activities"
const { read_activities_from_itinerary } = activity_actions
import { useEffect, useState } from "react"
import NotFoundItinerary from "../components/NotFoundItinerary"




export default function Activity({ itinerary_id }) {

  const dispatch = useDispatch()
  let activities = useSelector(store => store.activities.activities_from_itinerary)
  console.log(activities)
  // let name = useSelector((store =>store.activities?.activities_from_itinerary));
  // console.log(name)

  useEffect(
    () => {
      dispatch(read_activities_from_itinerary({ itinerary_id: itinerary_id }))

    }, []
  )
  return (
    <>
        <div className="w-[350px] h-[300px] flex items-center  justify-start bg-slate-100 mb-4 sm:w-[750px] ">
            {activities?.map(each => <div key={each._id} className="w-5/12 flex flex-col rounded-xl h-[190px] items-center p-2 m-4 bg-slate-400">
                <img className="w-[240px] h-[130px]" src={each.photo} alt={each.name} />
                <p className="text-[16px] font-bold">{each.name}</p>
            </div>
            )}
        </div>
    </>
)

}
