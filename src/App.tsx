
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import PublicLayout from "@/layouts/PublicLayout";

import {HomePage}from "@/routes/HomePage";
import AuthLayout from "@/layouts/AuthLayout";
import SignupPage from "./routes/SignupPage";
import SigninPage from "./routes/SigninPage";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import MainLayout from "./layouts/MainLayout";
import { Generate } from "./components/Generate";
import CreateEditPage from "./routes/CreateEditPage";
import { Dashboard } from "./routes/Dashboard";
import {MockLoadPage }from "./routes/MockLoadPage";
import {MockInterviewPage} from "./routes/MockInterviewPage";
import {Feedback }from "./routes/Feedback";
import  Service  from "./routes/Service";
// import  Contact  from "./routes/Contact";
import  Aboutpage  from "./routes/Aboutpage";
import ContactPage from "./routes/Contact";


const  App = () => {
  return (
    <Router>
      <Routes>
      {/* public routes */}
      <Route element={<PublicLayout/>}>
<Route index element={<HomePage/>}/>


<Route path="/about" element={<Aboutpage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/services" element={<Service />} />


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
<Route element={<Generate/>} path="/generate">
<Route index element={<Dashboard/>}/>
<Route path=":interviewId" element={<CreateEditPage />} />
<Route path="interview/:interviewId" element={<MockLoadPage/>} />
<Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
 <Route path="feedback/:interviewId" element={<Feedback />} />
</Route>
</Route>

      </Routes>
      </Router>
  )
}

export default  App







// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { PublicLayout } from "@/layouts/public-layout";
// import AuthenticationLayout from "@/layouts/auth-layout";
// import ProtectRoutes from "@/layouts/protected-routes";
// import { MainLayout } from "@/layouts/main-layout";

// import HomePage from "@/routes/home";
// import { SignInPage } from "./routes/sign-in";
// import { SignUpPage } from "./routes/sign-up";
// import { Generate } from "./components/generate";
// import { Dashboard } from "./routes/dashboard";
// import { CreateEditPage } from "./routes/create-edit-page";
// import { MockLoadPage } from "./routes/mock-load-page";
// import { MockInterviewPage } from "./routes/mock-interview-page";
// import { Feedback } from "./routes/feedback";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* public routes */}
//         <Route element={<PublicLayout />}>
//           <Route index element={<HomePage />} />
//         </Route>

//         {/* authentication layout */}
//         <Route element={<AuthenticationLayout />}>
//           <Route path="/signin/*" element={<SignInPage />} />
//           <Route path="/signup/*" element={<SignUpPage />} />
//         </Route>

//         {/* protected routes */}
//         <Route
//           element={
//             <ProtectRoutes>
//               <MainLayout />
//             </ProtectRoutes>
//           }
//         >
//           {/* add all the protect routes */}
//           <Route element={<Generate />} path="/generate">
//             <Route index element={<Dashboard />} />
//             <Route path=":interviewId" element={<CreateEditPage />} />
//             <Route path="interview/:interviewId" element={<MockLoadPage />} />
//             <Route
//               path="interview/:interviewId/start"
//               element={<MockInterviewPage />}
//             />
//             <Route path="feedback/:interviewId" element={<Feedback />} />
//           </Route>
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;