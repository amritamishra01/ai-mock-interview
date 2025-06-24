// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export const Contact = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <div className="flex-grow p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//         <p className="text-gray-700 mb-6">
//           We'd love to hear from you! Whether you have a question about features, pricing, or anything else — our team is ready to answer all your questions.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Reach Us At</h2>
//             <p className="text-gray-600">📍 123 AI Street, Tech City, 12345</p>
//             <p className="text-gray-600">📞 +1 (555) 123-4567</p>
//             <p className="text-gray-600">✉️ support@aimock.com</p>
//           </div>
//           <div>
//             <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
//             <div className="flex space-x-4 text-gray-600 text-xl">
//               <a href="#"><FaFacebookF className="hover:text-blue-500" /></a>
//               <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
//               <a href="#"><FaInstagram className="hover:text-pink-500" /></a>
//               <a href="#"><FaLinkedinIn className="hover:text-blue-600" /></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact






// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Main content */}
//       <main className="flex-grow p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
//         <p className="text-gray-600 text-center mb-8">
//           We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Contact Info */}
//           <div className="text-gray-700 space-y-4">
//             <p><strong>Address:</strong> 123 AI Street, Tech City, 12345</p>
//             <p><strong>Email:</strong> contact@aiinterview.com</p>
//             <p><strong>Phone:</strong> +91-9876543210</p>

//             <div className="flex space-x-4 mt-4 text-xl">
//               <a href="#" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-black text-white py-10">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold mb-3">Quick Links</h3>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="/" className="hover:text-white transition">Home</a></li>
//               <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
//               <li><a href="/about" className="hover:text-white transition">About Us</a></li>
//               <li><a href="/services" className="hover:text-white transition">Services</a></li>
//             </ul>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="font-semibold mb-3">About Us</h3>
//             <p className="text-sm text-gray-300">
//               We are committed to helping you unlock your full potential with AI-powered tools. Our platform offers resources to improve your interview skills.
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
//             <p className="text-sm text-gray-300 mb-3">123 AI Street, Tech City, 12345</p>
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

// export default ContactPage;



// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const ContactPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Main content */}
//       <main className="flex-grow p-6 max-w-5xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
//         <p className="text-gray-600 text-center mb-8">
//           We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Contact Form */}
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <textarea
//               placeholder="Your Message"
//               rows={5}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
//             >
//               Send Message
//             </button>
//           </form>

//           {/* Contact Info */}
//           <div className="text-gray-700 space-y-4">
//             <p><strong>Address:</strong> 123 AI Street, Tech City, 12345</p>
//             <p><strong>Email:</strong> contact@aiinterview.com</p>
//             <p><strong>Phone:</strong> +91-9876543210</p>

//             <div className="flex space-x-4 mt-4 text-xl">
//               <a href="#" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
//               <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ContactPage;



import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can also send this to Firebase, EmailJS, or your backend API
    // Reset form after submit
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-white">
      <main className="flex-grow p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="text-gray-700 space-y-4">
            <p><strong>Address:</strong> 123 AI Street, Tech City, 12345</p>
            <p><strong>Email:</strong> contact@aiinterview.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="hover:text-green-500 transition-colors"><FaFacebookF /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-green-500 transition-colors"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
