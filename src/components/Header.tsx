import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react"
import Container from "@/components/Container"; 
import LogoContainer from "./LogoContainer";
import NavigationRoutes from "./NavigationRoutes";
import { NavLink } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";
import ToggleContainer from "./ToggleContainer";




const Header = () => {
  const{userId}=useAuth()
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>
<Container>
  <div className="flex items-center gap-4 w-full">

{/* logo section*/}
<LogoContainer/>

{/*navigation section*/}
    <nav className="hidden md:flex items-center gap-3 flex-shrink-0">
<NavigationRoutes/>
{userId && (
<NavLink
          
          to={"/generate"}
          className={({ isActive }) =>
            cn(
              "text-base text-neutral-600 whitespace-nowrap",
              isActive && "text-neutral-900 font-semibold " 
            )
          }
        >
        Take an interview
        </NavLink>
)}  
</nav>

{/* profile section*/}

<div className="flex items-center gap-6 ml-auto">
  {/* profile section */}

  <ProfileContainer/>
  {/* mobile toggle section  */}

<ToggleContainer/>
</div>



  </div>
</Container>
    </header>
  )
}

export default Header