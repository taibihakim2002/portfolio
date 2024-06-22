import Fixed from "./Fixed";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
export default function Contact() {
  return (
    <div className=" w-full min-h-screen py-10 relative bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90">
      <div className="text-white uppercase px-14 md:px-20 flex flex-col min-h-screen relative z-40">
        <div className="relative">
          <h2 className="text-[50px] lg:text-[100px] text-center py-10 tracking-[10px] font-bold opacity-10 ">
            Contact
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-40 items-center justify-center">
          <div className="z-100">
            <h1 className="text-[25px] md:text-[30px] font-extrabold tracking-[3px] pb-5 border-b-2 mb-8">
              Contact with Me
            </h1>
            <div className="flex gap-5 items-center mb-5">
              <HiOutlineMail size={50} color="#777" />
              <h2 className="lowercase text-[20px] font-bold">
                taibihakim2002@gmail.com
              </h2>
            </div>
            <div className="flex gap-5 items-center mb-5">
              <MdOutlinePhone size={50} color="#777" />
              <h2 className="lowercase text-[20px] font-bold">+213655408680</h2>
            </div>
            <div className="flex gap-5 items-center mb-5">
              <CiLocationOn size={50} color="#777" />
              <h2 className=" text-[20px] font-bold">Djelfa, Algeria</h2>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <form className="flex flex-col gap-10 w-full">
              <input
                className="py-2 px-4 rounded-full text-black"
                type="email"
                placeholder="Email"
              />
              <input
                className="py-2 px-4 rounded-full text-black"
                type="text"
                placeholder="Name"
              />
              <textarea
                className="py-2 px-4 rounded-2xl text-black"
                name="message"
                id="message"
                placeholder="Message"
                rows={5}
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
