// import { db } from "@/config/firebase.config";
// import LoaderPage from "@/routes/LoaderPage";
// import { useAuth, useUser } from "@clerk/clerk-react";
// import { doc, getDoc,serverTimestamp, setDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";


// const AuthHandler = () => {


// const{isSignedIn}=useAuth();
// const{user}=useUser();
// const pathname=useLocation().pathname;
// const navigate=useNavigate();
// const[loading,setLoading]=useState(false);


// useEffect(()=>{

// const storeuserData=async()=>{

//     if(isSignedIn && user){
//     setLoading(true);
//     try {
//        const userSnap=await getDoc(doc(db,"users",user.id));
//        if(!userSnap.exists()){
//         const userData:User={
//             id:user.id,
//             name:user.fullName || user.firstName || "User",
//             email:user.primaryEmailAddress?.emailAddress || "not provided",
//             imageUrl:user.imageUrl,
//             createdAt:serverTimestamp(),
//             updatedAt:serverTimestamp()
//         }
//         await setDoc(doc(db,"users",user.id),userData);
//        }
//     } catch (error) {
//         console.error("Error fetching user data:", error);
        
//     }
//     finally{
//         setLoading(false);
//     }
// }}

// },[isSignedIn,user,pathname,navigate])

// if(loading){
//     return <LoaderPage/>
// }
//   return null
// }

// export default AuthHandler



import { db } from "@/config/firebase.config";
import LoaderPage from "@/routes/LoaderPage";
import { useAuth, useUser } from "@clerk/clerk-react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Optional: define a type if you want strong typing
type UserData = {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: any;
  updatedAt: any;
};

const AuthHandler = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const pathname = useLocation().pathname;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storeUserData = async () => {
      if (isSignedIn && user) {
        setLoading(true);
        try {
          const userRef = doc(db, "users", user.id);
          const userSnap = await getDoc(userRef);

          if (!userSnap.exists()) {
            const userData: UserData = {
              id: user.id,
              name: user.fullName || user.firstName || "User",
              email: user.primaryEmailAddress?.emailAddress || "not provided",
              imageUrl: user.imageUrl,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            };
            await setDoc(userRef, userData);
          }
        } catch (error) {
          console.error("Error storing user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    storeUserData();
  }, [isSignedIn, user, pathname]);

  if (loading) {
    return <LoaderPage />;
  }

  return null;
};

export default AuthHandler;
