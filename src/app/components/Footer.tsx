import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#191919] text-[#fff5ed] py-6 px-4 ">
      <div className="flex flex-wrap justify-around gap-6 max-w-screen-2xl max-h-screen mx-auto">
        {/* Logo and About */}
        <div className="flex flex-col gap-4 max-w-xs">
          <h2 className="text-2xl font-bold text-[#d269cc]">
            HG <span className="text-[#fff5ed]">BLOG<span className='animate-bounce'>.</span></span>
          </h2>
          <p className="text-sm">
            Sharing knowledge, ideas, and stories. Stay inspired with HG Blog!
          </p>

          {/* Send Email Input */}
          <div className="mt-4">
            <p className="text-sm mb-2">Send me tips, trends, freebies, updates & offers:</p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded bg-gray-700 text-[#fff5ed] placeholder-gray-400 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#d269cc] text-[#191919] font-bold rounded hover:bg-[#e7a5e3]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-2">
              Unsubscribe any time.{' '}
              <Link href="/privacy-policy" className="text-[#d269cc] underline hover:no-underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 max-w-xs">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col gap-1">
            <Link href="/" className="hover:text-[#d269cc]">Home</Link>
            <Link href="/about" className="hover:text-[#d269cc]">About</Link>
            {/* <Link href="/dashboard" className="hover:text-[#d269cc]">Dashboard</Link> */}
            <Link href="/blog" className="hover:text-[#d269cc]">Blog</Link>
            <Link href="/contact" className="hover:text-[#d269cc]">Contact</Link>
          </nav>
        </div>

        {/* Social Media and Language Dropdown */}
        <div className="flex flex-col gap-4 max-w-xs">
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6 hover:text-[#d269cc]" />
              </Link>
              <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                <FaTwitter className="w-6 h-6 hover:text-[#d269cc]" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <FaInstagram className="w-6 h-6 hover:text-[#d269cc]" />
              </Link>
            </div>
          </div>

          {/* Language Dropdown */}
          <div>
            <label htmlFor="language" className="text-sm block mb-2">Select Language:</label>
            <select
              id="language"
              className="px-3 py-2 rounded bg-gray-700 text-[#fff5ed] focus:outline-none"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm flex flex-col gap-2 items-center">
        <div>&copy; {new Date().getFullYear()} <span className="text-[#d269cc] font-bold">Hadiqa Gohar</span> Blog. All rights reserved.</div>
        <div className="flex items-center gap-1">
          <span>Powered by</span>
          <Link href="https://placelogo.com" target="_blank" aria-label="PlaceLogo">
            <span className="text-[#d269cc] font-bold">PlaceLogo</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
