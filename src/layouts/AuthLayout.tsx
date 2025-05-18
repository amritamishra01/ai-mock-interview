
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
  <div className="w-full h-screen overflow-hidden flex items-center justify-center relative">
        {/* handler to store the user data*/}
     <img src="svg/img/bg.png" alt="background" className="w-full h-full object-cover absolute opacity-50"/>

        <Outlet/>
      
    </div>
  )
}

export default AuthLayout