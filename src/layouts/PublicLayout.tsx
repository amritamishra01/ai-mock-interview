
// import { Footer } from "@/components/Footer"
// import Header from "@/components/Header"
// import AuthHandler from "@/handlers/AuthHandler"
// import { Outlet } from "react-router-dom"

// const PublicLayout = () => {
//   return (
//     <div className="w-full">
//         {/* handler to store the user data*/}

//         <AuthHandler/>
//         <Header/>

//         <Outlet/>
//         <Footer/>
//     </div>
//   )
// }

// export default PublicLayout
// import {Footer} from "@/components/Footer";
// import Header from "@/components/Header";
// import AuthHandler from "@/handlers/AuthHandler";
// import { Outlet } from "react-router-dom";

// const PublicLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen w-full bg-white">
//       {/* Store user data if needed */}
//       <AuthHandler />
//       <Header />
      
//       {/* Page content area grows to fill height */}
//       <main className="flex-grow">
//         <Outlet />
//       </main>

//       {/* Global Footer at bottom of all public pages */}
//       <Footer />
//     </div>
//   );
// };

// export default PublicLayout;


import {Footer} from "@/components/Footer";
import Header from "@/components/Header";
import AuthHandler from "@/handlers/AuthHandler";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-white">
      <AuthHandler />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
