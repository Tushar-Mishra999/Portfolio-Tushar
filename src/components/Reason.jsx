import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import reasonImg from "../assets/reason.svg";

const handleContactClick = () => {
  window.location.href = "#contact";
};

const Reason = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-2/3 flex flex-col justify-center items-center md:items-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center sm:text-left">Motivation</p>
          <h2 className={styles.sectionHeadText}>Why MDCC Web Dev?</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify sm:text-left"
        >
         Web development excites me because it lets me bring ideas to life in a way that's both creative and impactful. As someone who enjoys crafting interfaces that are not only visually engaging but also intuitive and user-friendly, I see MDCC as the perfect platform to apply these skills meaningfully. It’s fulfilling to build something that people interact with daily and that makes their experience smoother.
        </motion.p>

      </div>
      <div className="md:w-1/3 mt-8 md:mt-0 md:ml-20 flex items-center justify-center hidden md:block">
        <img
          src={reasonImg}
          alt="Your image"
          className="w-full h-full  overflow-hidden"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Reason, "reason");
