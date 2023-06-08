import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Skill = ({name, x, y}) => {
return(
<motion.div className='flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute text-light border border-[#915EFF]'
whileHover={{scale:1.05}}
initial={{x:0,y:0}}
whileInView={{ x:x, y:y }}
transition={{duration: 1.5}}
viewports={{once: true}}
>
{name}
</motion.div>)
}



const Tech = () => {
  return (
    // <div className="h-screen flex flex-col justify-center">
    // <motion.div variants={textVariant()} >
    //     <h2 className={`${styles.sectionHeadText} flex justify-center`}>Skills</h2>
    //   </motion.div>
    // <div className='flex flex-row flex-wrap justify-center gap-10 mt-20'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>
    // </div>

    <div className="h-screen">
      <h2 className='font-bold text-8xl mt-64 w-full text-center'>Skills</h2>

<div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>

<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer'

whileHover={{scale:1.05}}>
  <div className="rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute text-light border border-[#915EFF]">
    Flutter
  </div>
</motion.div>

<Skill name="React.js" x="-20vw" y="2vw"/>

<Skill name="Tailwind CSS" x="-5vw" y="-10vw"/>

<Skill name="Javascript" x="20vw" y="6vw" />

<Skill name="ReactJS" x="0vw" y="12vw"/>

<Skill name="Next.js" x="-20vw" y="-15vW"/>
<Skill name="AWS" x="15vw" y="-12vw"/>

<Skill name="C++" x="32vw" y="-5vw"/>

<Skill name="MySQL" x="30vw" y="-15vw"/>

<Skill name="Node.js" x="-25vw" y="18vw"/>
<Skill name="Dart" x="35vw" y="18vw"/>
</div>
</div>
  );
};

export default SectionWrapper(Tech, "skills");
