import Container from "@/components/Container"
import Footer from "@/components/Footer"
import Header from "@/components/header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex flex-colh-screen">
        {/* handler to store the user data*/}
        <Header/>

        
        <Container>
        <main className="flex-grow">
            <Outlet/>
        </main>
        </Container>
        <Footer/>
    </div>
  )
}

export default MainLayout