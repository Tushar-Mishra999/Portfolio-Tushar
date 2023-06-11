import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import desktopImg from "../assets/desktop.svg";


const handleContactClick = () => {
  window.location.href = "#contact";}



const About = () => {
  return (
    <div className="h-screen flex flex-row ">
    <div className=" flex flex-col justify-center ">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I am Tushar Mishra, a student, a developer and a lifelong learner with an open and inquisitive mind. I love to code and I'm inclined towards full stack developement, cloud computing and open-source development. I am always open for new challenges and opportunities. I am a team player and ready to step in as a leader whenever required.
      </motion.p>

      <div className='mt-8 flex flex-wrap gap-4'>
        <motion.button
          whileHover={{ backgroundColor: '#915EFF'  }}
          className='px-4 py-2 rounded-lg bg-black hover:text-white text-[#915EFF] font-semibold border border-[#915EFF] '
        >
          Resume
        </motion.button>
      <motion.button
          whileHover={{ backgroundColor: '#915EFF'  }}
          className='px-4 py-2 rounded-lg bg-black hover:text-white text-[#915EFF] font-semibold border border-[#915EFF] '
          onClick={handleContactClick}
        >
          Let's connect
        </motion.button>
      </div>

    </div>
    <div className="w-1/3 ml-20 ">
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
