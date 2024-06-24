import { motion, useAnimation } from "framer-motion";
import { projects } from "@/data";
import { GoArrowUpRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotate: 5 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Works() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="projects"
      className="w-full min-h-screen relative z-10 bg-no-repeat bg-cover bg-right after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-90"
    >
      <div className="text-white uppercase px-8 md:px-20 flex flex-col min-h-screen relative z-50">
        <div className="relative">
          <h2 className="text-[50px] lg:text-[100px] text-center py-10 tracking-[10px] font-bold opacity-10">
            Projects
          </h2>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((ele, index) => (
            <motion.div
              key={index}
              className="p-4 border-2 border-[#333] rounded-xl"
              variants={projectVariants}
            >
              <img
                className="w-full h-[250px] object-cover mb-2 rounded-xl"
                src={ele.img}
                alt="project"
              />
              <p className="capitalize text-[16px] mb-2 text-main font-bold tracking-widest">
                {ele.type}
              </p>
              <h3 className="capitalize text-[25px] font-extrabold tracking-[2px] mb-2">
                {ele.name}
              </h3>
              <p className="mb-2 lowercase">{ele.description}</p>
              <div className="flex gap-2 mb-2 text-main">
                {ele.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="flex gap-1 items-center">
                  <a
                    href={ele.live}
                    target="_blank"
                    className="capitalize underline"
                  >
                    Live Preview
                  </a>
                  <GoArrowUpRight />
                </div>
                <div className="flex gap-1 items-center">
                  <a
                    href={ele.source}
                    target="_blank"
                    className="capitalize underline"
                  >
                    Code Source
                  </a>
                  <GoArrowUpRight />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
