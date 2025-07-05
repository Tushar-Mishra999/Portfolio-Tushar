import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import recommendationImg from "../assets/recommendation.svg";

const handleContactClick = () => {
  window.location.href = "#contact";
};

const Recommendation = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      
      <div className="md:w-1/3 mt-8 md:mt-0  flex items-center justify-center hidden md:block">
        <img
          src={recommendationImg}
          alt="Your image"
          className="w-full h-full  overflow-hidden"
        />
      </div>
      <div className="md:w-2/3 flex flex-col md:ml-20 justify-center items-center md:items-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center sm:text-left">Analysis</p>
          <h2 className={styles.sectionHeadText}>Recommendations</h2>
        </motion.div>

        <motion.ul
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify md:text-right sm:text-left list-disc list-inside"
      >
        <li>Increase text visibility over the background video in the hero section to enhance readability and user engagement.</li>
        <li>Make the navigation bar sticky to improve accessibility and user experience while scrolling.</li>
        <li>Consider implementing a basic dark mode toggle if there is sufficient user demand and it aligns with the institute’s design guidelines, ensuring readability and visual consistency.</li>
        <li>Add a dedicated feedback form section to collect user suggestions and bug reports, enabling continuous improvement based on real user input.</li>
      </motion.ul>
     
      </div>
    </div>
  );
};

export default SectionWrapper(Recommendation, "recommendation");
