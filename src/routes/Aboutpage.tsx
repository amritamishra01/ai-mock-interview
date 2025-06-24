// import { Link } from "react-router-dom";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export const Aboutpage = () => {
//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       {/* Content */}
//       <div className="p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-2">About Us</h1>
//         <p className="text-gray-700">
//           We help students and professionals prepare for interviews using AI. Our platform simulates interview scenarios and provides real-time feedback.
//         </p>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white py-10 mt-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><Link to="/" className="hover:underline">Home</Link></li>
//               <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
//               <li><Link to="/about" className="hover:underline">About Us</Link></li>
//               <li><Link to="/services" className="hover:underline">Services</Link></li>
//             </ul>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="font-semibold mb-3">About Us</h3>
//             <p className="text-sm text-gray-300">
//               We are committed to helping you unlock your full potential with AI-powered tools. Our platform offers a wide range of resources to improve your interview skills and chances of success.
//             </p>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="font-semibold mb-3">Services</h3>
//             <ul className="text-sm text-gray-300 space-y-2">
//               <li>Interview Preparation</li>
//               <li>Career Coaching</li>
//               <li>Resume Building</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="font-semibold mb-3">Contact Us</h3>
//             <p className="text-sm text-gray-300 mb-3">
//               123 AI Street, Tech City, 12345
//             </p>
//             <div className="flex space-x-4 text-gray-400 text-lg">
//               <a href="#" className="hover:text-white"><FaFacebookF /></a>
//               <a href="#" className="hover:text-white"><FaTwitter /></a>
//               <a href="#" className="hover:text-white"><FaInstagram /></a>
//               <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };






// export const Aboutpage = () => {
//   return (
//     <div className="min-h-screen p-6 max-w-5xl mx-auto overflow-hidden">
//       <h1 className="text-3xl font-bold mb-2">About Us</h1>
//       <p className="text-gray-700">
//         We help students and professionals prepare for interviews using AI.
//         Our platform simulates interview scenarios and provides real-time feedback.
//       </p>
//     </div>
//   );
// };




// const Aboutpage = () => {
//   return (
//     <div>Aboutpage</div>
//   )
// }

// export default Aboutpage




const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-white px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        At AI Mock Interview, we are passionate about helping students and professionals 
        prepare for job interviews with confidence. Using cutting-edge AI, we simulate real interview 
        scenarios and provide detailed feedback to help you grow.
      </p>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Mission */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to democratize access to high-quality interview preparation tools using
            artificial intelligence. We aim to empower every candidate with feedback, confidence, and knowledge.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Our Vision</h3>
          <p className="text-gray-700">
            We envision a future where every candidate can walk into any interview
            room fully prepared, regardless of background, location, or access to coaching.
          </p>
        </div>
      </div>

      {/* Team / Values / More */}
      <div className="mt-12 bg-green-100 p-8 rounded-xl shadow-sm">
        <h3 className="text-2xl font-semibold text-center text-green-700 mb-4">Why Choose Us?</h3>
        <ul className="text-gray-700 list-disc list-inside space-y-2 max-w-3xl mx-auto text-center md:text-left">
          <li>AI-powered mock interviews tailored to your goals</li>
          <li>Real-time, actionable feedback on answers</li>
          <li>Interactive coaching and question banks</li>
          <li>Accessible anywhere, anytime</li>
          <li>Backed by career experts and engineers</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
