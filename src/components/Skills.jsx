import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Progress } from "@/components/ui/progress";
import FixedReverse from "./FixedReverse";

export default function Skills() {
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
      transition: { duration: 0.9, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.9 },
    },
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="w-full min-h-screen relative z-10 bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90">
      <div className="text-white uppercase px-14 md:px-20 flex flex-col min-h-screen relative z-50">
        <div className="relative">
          <h2 className="text-[50px] lg:text-[100px] text-center py-10 tracking-[10px] font-bold opacity-10">
            Skills
          </h2>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex-1 flex flex-col lg:flex-row gap-x-20 items-center justify-center py-14"
        >
          <motion.div variants={itemVariants} className="lg:w-1/2 lg:order-1">
            <h2 className="text-[22px] md:text-[30px] font-bold tracking-[7px]">
              I am A Frontend Developer
            </h2>
            <p className="text-[14px] md:text-[16px] tracking-[2px] md:tracking-[3px] lowercase font-light lg:mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              explicabo fugit placeat eum deserunt velit consectetur atque
            </p>
            <div className="py-10">
              <motion.div variants={progressVariants} className="mb-2">
                <span className=" text-gray-500 block font-bold">19%</span>
                <div className="flex gap-3 items-center">
                  <Progress value={19} />
                  <span className="text-[18px] font-light">HTML</span>
                </div>
              </motion.div>
              <motion.div variants={progressVariants} className="mb-2">
                <span className=" text-gray-500 block font-bold">70%</span>
                <div className="flex gap-3 items-center">
                  <Progress value={70} />
                  <span className="text-[18px] font-light">CSS</span>
                </div>
              </motion.div>
              <motion.div variants={progressVariants} className="mb-2">
                <span className=" text-gray-500 block font-bold">50%</span>
                <div className="flex gap-3 items-center">
                  <Progress value={50} />
                  <span className="text-[18px] font-light">JS</span>
                </div>
              </motion.div>
              <motion.div variants={progressVariants} className="mb-5">
                <span className=" text-gray-500 block font-bold">65%</span>
                <div className="flex gap-3 items-center">
                  <Progress value={65} />
                  <span className="text-[18px] font-light">REACT</span>
                </div>
              </motion.div>
              <motion.button
                variants={itemVariants}
                className="px-10 py-2 bg-main rounded-full"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="z-100 order-0">
            <img
              className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-full border-8 border-main"
              src="/imgs/my.jpg"
              alt="My image"
            />
          </motion.div>
        </motion.div>
        <FixedReverse id={2} />
      </div>
    </div>
  );
}
