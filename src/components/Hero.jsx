import Fixed from "./Fixed";

export default function Hero() {
  return (
    <div className="bg-hero-bg w-full min-h-screen relative z-10 bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90">
      <div className="text-white uppercase px-10 md:px-20 flex flex-col min-h-screen relative z-40">
        <div className="flex-1 flex flex-col lg:flex-row gap-y-10 items-center justify-center">
          <div className="z-100 order-1 md:order-0">
            <img
              className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-full"
              src="/imgs/my.jpg"
              alt="My image"
            />
          </div>
          <div>
            <h1 className="text-[45px] md:text-[100px] font-bold tracking-[15px] ">
              Creative
            </h1>
            <h2 className="text-[18px] md:text-[40px] font-bold tracking-[26px] md:tracking-[43px]">
              Developer
            </h2>
            <h2 className="text-[18px] md:text-[40px] font-light tracking-[6px] md:tracking-[7.5px] text-[#555] ">
              Sensible to frontEnd
            </h2>
          </div>
        </div>
        <Fixed id={1} />
      </div>
      <div className="absolute w-full h-fit  z-50 bottom-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#191919"
            fill-opacity="1"
            d="M0,128L120,154.7C240,181,480,235,720,261.3C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
