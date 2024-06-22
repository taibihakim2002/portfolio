import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

export default function FixedReverse({ id }) {
  return (
    <>
      <div className="flex flex-col gap-3 absolute top-1/2 right-3 ">
        <div className="p-1 bg-white text-black rounded-full">
          <FaXTwitter />
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <TiSocialFacebook />
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <IoLogoInstagram />
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <FaLinkedinIn />
        </div>
      </div>
      <span className="bottom-3 start-3 lg:bottom-10 lg:start-10 absolute text-[70px] md:text-[100px] font-bold underline">
        0{id}
      </span>
    </>
  );
}
