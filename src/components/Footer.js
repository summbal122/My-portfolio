import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-gray-50 text-black pt-12">
      <div className="w-9/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6 flex flex-col justify-center">
          <h1 className="text-2xl font-serif text-black font-semibold  mb-4">Sumbal Ijaz</h1>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <MdEmail size={22} className="text-gray-500" />
              <span className="text-sm md:text-base">sumbalijaz207@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} className="text-gray-500" />
              <span className="text-sm md:text-base">+92 321 6265422</span>
            </div>
          </div>

          <div className="mt-6 flex gap-5 text-gray-600">
            <a  href="https://github.com/summbal122" target="_blank" rel="noopener noreferrer" 
            className="hover:text-black transition" >
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sumbal-ijaz-90047925b/" target="_blank" rel="noopener noreferrer"
              className="hover:text-black transition" >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        <form className="md:col-span-6 flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold font-serif text-center mb-2">Contact Me</h2>
          
          <div className="flex flex-col md:flex-row gap-3">
            <input
              className="border w-full py-2 px-4 rounded-lg focus:ring-1 focus:ring-black outline-none"
              placeholder="First Name"
              required />
            <input
              className="border w-full py-2 px-4 rounded-lg focus:ring-1 focus:ring-black outline-none"
              placeholder="Last Name"
              required  />
          </div>

          <input
            type="email"
            className="border py-2 px-4 rounded-lg focus:ring-1 focus:ring-black outline-none"
            placeholder="Your Email"
            required/>

          <textarea
            className="border py-2 px-4 rounded-lg focus:ring-1 focus:ring-black outline-none"
            rows={5}
            placeholder="Your Message..."
            required></textarea>

          <button
            type="submit"
            className=" bg-golden-yellow text-black px-6 py-3 rounded-xl shadow-sm hover:bg-golden-yellow/80 hover:cursor-pointer"  >
            Send Message
          </button>
        </form>
      </div>

      <hr className="mt-12 border-gray-300" />
      <p className="text-center mt-4 text-sm text-gray-500 tracking-wide mb-3">
        © 2025 Web Developer. All rights reserved.
      </p>
    </footer>
  );
}
