import Image from 'next/image';
import React from 'react';

// Dynamically import the Typewriter component
// const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

function Home() {
  return (
    <div className="bg-gray-200 py-6 px-4 max-w-screen-2xl max-h-screen mx-auto flex flex-col sm:flex-row items-center justify-center">
      {/* Text Section */}
      <div className="text-center sm:text-left space-y-6 sm:mr-6 w-full sm:w-1/2 mx-10">
        <h1 className="scroll-animate-left  text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#191919] via-[#b037a6] to-[#191919] bg-clip-text mb-0 text-transparent">
          Discover the Power of Words
        </h1>
        {/* <hr className=' w-full h-2 bg-gradient-to-r from-[#191919] via-[#b037a6] to-[#191919] ' /> */}

        <h2 className="scroll-animate-left scroll-delay-1s text-xl sm:text-xl md:text-2xl font-semibold text-[#191919]">
          Your Source for the <span className='text-[#b037a6]'>Latest Trends</span> & <span className='text-[#b037a6]'>Insights.</span>
        </h2>
        <p className="scroll-animate-left scroll-delay-2s text-lg sm:text-sm md:text-xl text-[#191919] italic">
          Stay ahead of the curve with expert articles on design, technology, lifestyle, and more. Our blog is your go-to resource for the latest news, tips, and inspiration to fuel your creativity and knowledge.
        </p>
        <button className=" scroll-animate-left  scroll-delay-3s styled-button uppercase px-5 py-3 bg-[#e7a5e3] text-[#191919] font-semibold rounded hover:bg-[#d269cc]">Get Started</button>
      </div>

      {/* Image Section */}
      <div className="scroll-animate-right scroll-delay-4s mt-6 sm:mt-0 w-full sm:w-1/2">
        <Image
        height={80}
        width={100}
          src="rb_4289.png"
          alt="Illustration"
          className="mx-auto sm:mx-0 max-w-full h-auto w-[80%] rounded-lg"
        />
      </div>
    </div>
  );
}

export default Home;
