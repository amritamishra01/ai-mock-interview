
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDDTdInU4vRChi-AXcPCty9Tx_BV0XHHAk",
  authDomain: "ai-mock-interview-react-8b1bb.firebaseapp.com",
  projectId: "ai-mock-interview-react-8b1bb",
  storageBucket: "ai-mock-interview-react-8b1bb.firebasestorage.app",
  messagingSenderId: "383361586804",
  appId: "1:383361586804:web:35e34262dd681dec03e321"
};
const app=getApps.length>0?getApp():initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db};