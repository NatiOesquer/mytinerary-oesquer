import NavBar from "./components/NavBar"
import Arrow from "./components/Arrow"
import CardPolaroid from "./components/CardPolaroid"

function App() {
  const nombre1 = 'My'
  const nombre2 = 'Tinerary'

  let data = [
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
  ]

  return (
    <>

      <NavBar />
      <main className="grow pt-20 ml-28 mr-28 flex items-center flex-grawp">
        <div className="w-4/5 mr-[150px]">
          <h1 className="text-[45px] font-extrabold mb-8">Find the perfect destination</h1>
          <p className="mb-8 text-[30px]">Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
          <a href="#" className="px-10 bg-[#4F46E5]  p-2 rounded-lg text-white text-[25px]">View More</a>
        </div>
        <div className="flex justify-center items-center">
        <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" />
        <div className="flex flex-grawp w-11/12 justify-center ">
          {data.slice(0,4).map(each=> <CardPolaroid key={each.id} src={each.photo} alt={each.id} text={each.city} />)}
          

        </div>
        <Arrow direction= "M8.25 4.5l7.5 7.5-7.5 7.5" />
        </div>
      </main>

    </>
  )
}

export default App
