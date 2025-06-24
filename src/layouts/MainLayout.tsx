import Container from "@/components/Container"
import {Footer} from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet, useLocation } from "react-router-dom"

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col h-screen">
//         {/* handler to store the user data*/}
//         <Header/>

        
//         <Container>
//         <main className="flex-grow">
//             <Outlet/>
//         </main>
//         </Container>
//         <Footer/>
//     </div>
//   )
// }

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <main className="flex-grow">
//         <Container>
//           <Outlet />
//         </Container>
//       </main>
//       <Footer />
//     </div>
//   );
// };
const MainLayout = () => {
  const location = useLocation();
  const hideFooterRoutes = ["/generate"]; // add more paths here if needed

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};


export default MainLayout