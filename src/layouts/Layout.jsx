import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Layout({children}) {    
  return (
    <div className="w-full min-h-screen flex flex-col"> 

      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
