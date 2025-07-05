import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import agendaImg from "../assets/agenda.svg";

const handleContactClick = () => {
  window.location.href = "#contact";
};

const Agenda = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      
      <div className="md:w-1/3 mt-8 md:mt-0  flex items-center justify-center hidden md:block">
        <img
          src={agendaImg}
          alt="Your image"
          className="w-full h-full  overflow-hidden"
        />
      </div>
      <div className="md:w-2/3 flex flex-col md:ml-20 justify-center items-center md:items-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center sm:text-left">Outline</p>
          <h2 className={styles.sectionHeadText}>Agenda</h2>
        </motion.div>

        <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-right sm:text-left list-disc list-inside"
      >
        <li>Bug resolution on priority basis, ensuring minimal disruption to user experience.</li>
        <li >User-centric improvements, focusing on enhancing usability and functionality.</li>
        <li>Performance and SEO optimizations to ensure the platform runs smoothly and efficiently.</li>
        <li>Security and scalability, ensuring the platform can handle growth and protect user data.</li>
        <li>Backend efficiency & collaboration, to reduce update time with content and design teams.</li>
      </motion.ul>
     
      </div>
    </div>
  );
};

export default SectionWrapper(Agenda, "agenda");
