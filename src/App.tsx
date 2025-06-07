
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";

import {HomePage}from "@/routes/HomePage";
import AuthLayout from "@/layouts/AuthLayout";
import SignupPage from "./routes/SignupPage";
import SigninPage from "./routes/SigninPage";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import MainLayout from "./layouts/MainLayout";


const  App = () => {
  return (
    <Router>
      <Routes>
      {/* public routes */}
      <Route element={<PublicLayout/>}>
<Route index element={<HomePage/>}/>
      </Route>




{/* authenticated routes */}

      <Route element={<AuthLayout/>}>
<Route path="/signin/*" element={<SigninPage/>}/>
<Route path="/signup/*" element={<SignupPage/>}/>
      </Route>


      {/*protected routes */}

<Route element={
  <ProtectedRoutes>
  <MainLayout/>
</ProtectedRoutes>}>

{/* add your protected routes here */}
</Route>

      </Routes>
      </Router>
  )
}

export default  App
