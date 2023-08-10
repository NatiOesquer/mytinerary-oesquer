import { useParams } from "react-router-dom"

export default function CityDetails() {

  const { city_id } = useParams()

  return (
    <div>CityDetails of city {city_id} under construction</div>
  )
}
