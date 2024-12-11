import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8 bg-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-center scroll-animate-down ">
        CONTACT <span className="text-[#93488f]">US</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 ">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2 bg-[#f8edf6] p-6 rounded-lg shadow-md mt-6 scroll-animate-left ">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="contact-left"
          >
            <input
              type="hidden"
              name="access_key"
              value="671277a9-3056-46df-ae88-682920d99420"
            />
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 scroll-animate-left ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-animate-left  "
                placeholder="Your Name"
                aria-label="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 scroll-animate-left scroll-delay-1s">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-animate-left scroll-delay-1s"
                placeholder="Your Email"
                aria-label="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 scroll-animate-left scroll-delay-2s">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 scroll-animate-left scroll-delay-2s"
                placeholder="Your Message"
                aria-label="Enter your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="styled-button transition duration-200 scroll-animate-up scroll-delay-3s"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center scroll-animate-right scroll-delay-1s">
          <Image
            height={100}
            width={100}
            src="/rb_27000.png" // Update if necessary
            alt="Contact Us"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
