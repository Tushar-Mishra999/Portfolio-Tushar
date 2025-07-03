import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import desktopImg from "../assets/desktop.svg";

const handleContactClick = () => {
  window.location.href = "#contact";
};

const About = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-2/3 flex flex-col justify-center items-center md:items-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center sm:text-left">Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify sm:text-left"
        >
          I am Tushar Mishra, currently pursuing my MBA at IIM Ranchi to broaden my horizons across business, strategy, and leadership. With prior experience as a Software Engineer, I’ve developed a strong foundation in technology, product development, and cross-functional collaboration. Now, I’m looking to combine my tech background with business skills to solve real-world problems and add value to organizations.
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-4">
          <motion.button
            whileHover={{ backgroundColor: "#0054FF" }}
            className="px-4 py-2 rounded-lg bg-primary hover:text-white text-[#0054FF] font-semibold border border-[#0054FF]"
            onClick={() => {
              const driveLink = 'https://drive.google.com/file/d/1DiiUyQLpm3TlvBKXmYjS6vSa0mYwBO1d/view?usp=sharing';
              window.open(driveLink, '_blank');
            }}
          >
            Resume
          </motion.button>
          <motion.button
            whileHover={{ backgroundColor: "#0054FF" }}
            className="px-4 py-2 rounded-lg bg-primary hover:text-white text-[#0054FF] font-semibold border border-[#0054FF]"
            onClick={handleContactClick}
          >
            Let's connect
          </motion.button>
        </div>
      </div>
      <div className="md:w-1/3 mt-8 md:mt-0 md:ml-20 flex items-center justify-center hidden md:block">
        <img
          src={desktopImg}
          alt="Your image"
          className="w-full h-full  overflow-hidden"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
