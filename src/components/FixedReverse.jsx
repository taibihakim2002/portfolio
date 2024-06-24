import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

export default function FixedReverse({ id }) {
  return (
    <>
      <div className="flex flex-col gap-3 absolute top-1/2 right-3 ">
        <div className="p-1 bg-white text-black rounded-full">
          <a href="https://github.com/taibihakim2002" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <a href="https://www.facebook.com/hakimtaibi2002/" target="_blank">
            <TiSocialFacebook />
          </a>
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <a href="https://www.instagram.com/taibihaakim" target="_blank">
            <IoLogoInstagram />
          </a>
        </div>
        <div className="p-1 bg-white text-black rounded-full">
          <a
            href="https://www.linkedin.com/in/taibi-hakim-54432b16b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <span className="bottom-3 start-3 lg:bottom-10 lg:start-10 absolute text-[70px] md:text-[100px] font-bold underline">
        0{id}
      </span>
    </>
  );
}
