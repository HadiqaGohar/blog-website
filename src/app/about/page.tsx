import React from 'react';
import { FaUsers, FaCode, FaFileAlt, FaHeart, FaStar, FaHandsHelping, FaLeaf, FaSmile } from 'react-icons/fa'; // Import additional icons

function About() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-6 bg-gray-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {/* Our Community Section */}
        <div className="scroll-animate-right text-center bg-[#eeb4e7] p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaUsers className="mx-auto text-4xl text-[#4B9CD3] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-1s text-2xl font-semibold mb-2 text-[#191919]">Our Community</h2>
          <p className="scroll-animate-left scroll-delay-2s text-lg text-gray-600">
            Our community is a vibrant space where individuals from diverse backgrounds come together to share ideas, experiences, and insights. Whether you&apos;re a seasoned expert or just starting your journey, you&apos;ll find valuable connections, collaborative opportunities, and support at every turn.
          </p>
        </div>

        {/* Technical Excellence Section */}
        <div className="scroll-animate-right scroll-delay-1s text-center bg-gray-300 p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaCode className="mx-auto text-4xl text-[#4B9CD3] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-2s text-2xl font-semibold mb-2 text-[#191919]">Technical Excellence</h2>
        {
            <p className="scroll-animate-left scroll-delay-3s text-lg text-gray-600">
            We are committed to delivering the highest quality solutions through cutting-edge technology. Our team of experts is dedicated to crafting innovative and scalable systems that meet the needs of today&apos;s fast-paced digital landscape.
          </p>
        }
        </div>

        {/* Quality Content Section */}
        <div className=" scroll-animate-right scroll-delay-2s text-center bg-[#eeb4e7] p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaFileAlt className="mx-auto text-4xl text-[#4B9CD3] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-3s text-2xl font-semibold mb-2 text-[#191919]">Quality Content</h2>
          <p className="scroll-animate-left scroll-delay-4s text-lg text-gray-600">
            At the heart of our platform lies a dedication to delivering high-quality content. Whether it&apos;s in-depth articles, expert insights, or engaging tutorials, we aim to provide valuable resources that inspire, educate, and inform.
          </p>
        </div>

        {/* Innovation Section */}
        <div className="scroll-animate-right text-center bg-gray-300 p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaStar className="mx-auto text-4xl text-[#F1C40F] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-1s text-2xl font-semibold mb-2 text-[#191919]">Innovation</h2>
          <p className="scroll-animate-left scroll-delay-2s text-lg text-gray-600">
            Innovation is at the core of what we do. We strive to bring fresh ideas to the table and challenge conventional thinking. Our team actively explores new ways to solve problems and create opportunities, ensuring that our solutions are not only functional but also groundbreaking.
          </p>
        </div>

        {/* Passion Section */}
        <div className="scroll-animate-right scroll-delay-1s text-center bg-[#eeb4e7] p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaHeart className="mx-auto text-4xl text-[#E74C3C] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-2s text-2xl font-semibold mb-2 text-[#191919]">Passion</h2>
          <p className="scroll-animate-left scroll-delay-3s text-lg text-gray-600">
            Passion drives everything we do. It fuels our creativity, determination, and commitment to excellence. Our team is driven by a shared enthusiasm for making a positive impact, whether through developing new technologies or creating meaningful content for our audience.
          </p>
        </div>

        {/* Collaboration Section */}
        <div className="scroll-animate-right scroll-delay-2s text-center bg-gray-300 p-6 rounded-lg shadow-lg hover:bg-[#F8F9FA] transition-all duration-300 ease-in-out hover:scale-105">
          <FaHandsHelping className="mx-auto text-4xl text-[#2ECC71] mb-4 animate-bounce" />
          <h2 className="scroll-animate-left scroll-delay-3s text-2xl font-semibold mb-2 text-[#191919]">Collaboration</h2>
          <p className=" scroll-animate-left scroll-delay-4s text-lg text-gray-600">
            We believe in the power of collaboration. By working together, we can accomplish more than any one person could alone. Our diverse team combines unique perspectives to create innovative solutions and achieve common goals, ensuring success through shared effort.
          </p>
        </div>

        
      </div>
    </div>
  );
}

export default About;
