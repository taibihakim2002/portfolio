import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Fixed from "./Fixed";

export default function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-hero-bg w-full min-h-screen relative z-10 bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90">
      <div className="text-white uppercase px-10 md:px-20 flex flex-col min-h-screen relative z-40">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex-1 flex flex-col lg:flex-row gap-y-10 items-center justify-center"
        >
          <motion.div
            variants={imageVariants}
            className="z-100 order-1 md:order-0"
          >
            <img
              className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-full"
              src="/imgs/my.jpg"
              alt="My image"
            />
          </motion.div>
          <div>
            <motion.h1
              variants={textVariants}
              className="text-[45px] md:text-[100px] font-bold tracking-[15px]"
            >
              Creative
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="text-[18px] md:text-[40px] font-bold tracking-[26px] md:tracking-[43px]"
            >
              Developer
            </motion.h2>
            <motion.h2
              variants={textVariants}
              className="text-[18px] md:text-[40px] font-light tracking-[6px] md:tracking-[7.5px] text-[#555]"
            >
              Sensible to frontEnd
            </motion.h2>
          </div>
        </motion.div>
        <Fixed id={1} />
      </div>
      <div className="absolute w-full h-fit z-50 bottom-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#191919"
            fillOpacity="1"
            d="M0,128L120,154.7C240,181,480,235,720,261.3C960,288,1200,288,1320,288L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
