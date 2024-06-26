import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <div
      id="services"
      className="bg-hero-bg w-full min-h-screen py-10 relative z-10 bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90"
    >
      <div className="text-white uppercase px-8 md:px-20 flex flex-col min-h-screen relative z-40">
        <div className="relative">
          <h2 className="text-[50px] lg:text-[100px] text-center py-10 tracking-[10px] font-bold opacity-10 ">
            Services
          </h2>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <motion.div
            variants={itemVariants}
            className="px-5 py-10 bg-[#191919] shadow-lg rounded-lg border-2 border-main hover:-translate-y-1 transition"
          >
            <div className="flex justify-center mb-5">
              <img
                className="w-[70px] h-[70px] object-cover rounded-full"
                src="imgs/web.webp"
                alt=""
              />
            </div>
            <h2 className="text-center tracking-[5px] mb-5">Web Development</h2>
            <p className="lowercase text-[#999] text-center">
              Providing website updates and maintenance to improve
              functionality, performance, and aesthetics.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="px-5 py-10 bg-[#191919] shadow-lg rounded-lg border-2 border-main hover:-translate-y-1 transition"
          >
            <div className="flex justify-center mb-5">
              <img
                className="w-[70px] h-[70px] object-cover rounded-full"
                src="imgs/ui.jpg"
                alt=""
              />
            </div>
            <h2 className="text-center tracking-[5px] mb-5">
              Performance optimization
            </h2>
            <p className="lowercase text-[#999] text-center">
              Enhancing website performance through optimization techniques to
              ensure fast load times and smooth user interactions.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="px-5 py-10 bg-[#191919] shadow-lg rounded-lg border-2 border-main hover:-translate-y-1 transition"
          >
            <div className="flex justify-center mb-5">
              <img
                className="w-[70px] h-[70px] object-cover rounded-full"
                src="imgs/edit.jpg"
                alt=""
              />
            </div>
            <h2 className="text-center tracking-[5px] mb-5">Edit Websites</h2>
            <p className="lowercase text-[#999] text-center">
              Providing website updates and maintenance to improve
              functionality, performance, and aesthetics.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="px-5 py-10 bg-[#191919] shadow-lg rounded-lg border-2 border-main hover:-translate-y-1 transition"
          >
            <div className="flex justify-center mb-5">
              <img
                className="w-[70px] h-[70px] object-cover rounded-full"
                src="imgs/mobile.jpg"
                alt=""
              />
            </div>
            <h2 className="text-center tracking-[5px] mb-5">
              Accessibility Improvements
            </h2>
            <p className="lowercase text-[#999] text-center">
              Ensuring websites are accessible to all users, including those
              with disabilities, by adhering to accessibility standards and best
              practices.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
