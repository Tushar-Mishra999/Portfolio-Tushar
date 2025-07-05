import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import testimonialImg from "../assets/testimonial.svg";

const handleContactClick = () => {
  window.location.href = "#contact";
};

const Testimonials = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row">
      <div className="md:w-2/3 flex flex-col justify-center items-center md:items-start">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center sm:text-left">What People Say</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>

        <motion.div
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify sm:text-left space-y-6"
            >
            <div>
                <p>
                - " I had the pleasure of working with Tushar on my team, and he stood out as a sharp and thoughtful software developer. His logical approach, ability to ask the right questions, and strong user-first mindset made a real impact on our product decisions. Tushar also brings a calm, collaborative energy to the team and is excellent at cross-functional coordination. A solid teammate and a dependable contributor — he’ll be an asset to any team."
                </p>
                <p className="mt-2 font-medium text-white">Alokik Kumar Aggarwal<br />Co-Founder & CEO, Airia</p>
            </div>

            <div>
                <p>
                - " Tushar is a good teammate to work with. His problem-solving skills and ability to grasp new technologies while working in a team is what makes him a great team player."
                </p>
                <p className="mt-2 font-medium text-white">Ismail Khan<br />Software Engineer, EPAM Systems</p>
            </div>
        </motion.div>


      </div>
      <div className="md:w-1/3 mt-8 md:mt-0 md:ml-20 flex items-center justify-center hidden md:block">
        <img
          src={testimonialImg}
          alt="Your image"
          className="w-full h-full  overflow-hidden"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
