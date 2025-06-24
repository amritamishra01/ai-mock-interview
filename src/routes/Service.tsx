// export const Service = () => (
//   <div className="p-6">
//     <h1 className="text-2xl font-bold mb-2">Our Services</h1>
//     <ul className="list-disc pl-5 text-gray-700 space-y-2">
//       <li>AI Mock Interviews</li>
//       <li>Instant Feedback & Ratings</li>
//       <li>Resume Review</li>
//       <li>Interview Progress Reports</li>
//     </ul>
//   </div>
// );


// const Service = () => {
//   return (
//     <div>Service</div>
//   )
// }

// export default Service


const ServicesPage = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] bg-white px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Our Services
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        We provide a suite of AI-powered tools and expert guidance to help you succeed in your career journey.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Interview Preparation */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Interview Preparation</h3>
          <p className="text-gray-700">
            Practice real-world mock interviews with instant AI feedback to build your confidence and readiness.
          </p>
        </div>

        {/* Career Coaching */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Career Coaching</h3>
          <p className="text-gray-700">
            Personalized career guidance from experts to help you choose the right path and reach your goals.
          </p>
        </div>

        {/* Resume Building */}
        <div className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Resume Building</h3>
          <p className="text-gray-700">
            Craft an impressive resume with AI-suggested improvements to stand out to employers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
