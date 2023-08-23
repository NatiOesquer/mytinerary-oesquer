import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"
import Welcome from "../components/Welcome"

export default function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white
      sm:bg-white
      md: bg-cover
      lg:">

      <NavBar />
       {/* <Welcome />*/}
        <Outlet />
      <Footer />
    </div>
  )
}
