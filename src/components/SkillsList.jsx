import { motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const skillIcons = [
  "imgs/html.png",
  "imgs/css.png",
  "imgs/js.png",
  "imgs/tailwind.png",
  "imgs/bootstrap.svg",
  "imgs/react.webp",
  "imgs/nextjs.png",
  "imgs/shadcn.png",
  "imgs/git.png",
];

const skillVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

export default function SkillsList() {
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    console.log("In view:", inView);
  }, [inView]);

  return (
    <div
      className="px-14 py-10 bg-main grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 justify-center gap-8"
      ref={ref}
    >
      {skillIcons.map((icon, index) => (
        <motion.div
          key={icon}
          className="flex justify-center"
          custom={index}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={skillVariants}
        >
          <img className="w-[90px] h-[90px] object-contain" src={icon} alt="" />
        </motion.div>
      ))}
    </div>
  );
}
