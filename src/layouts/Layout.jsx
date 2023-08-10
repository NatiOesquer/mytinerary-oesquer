import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col">

      <NavBar />
        <Outlet />
      <Footer />
    </div>
  )
}
