import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";


const Skill = ({name, x, y}) => {
return(
<motion.div className='flex items-center justify-center rounded-full font-semibold py-3 px-6 shadow-dark cursor-pointer absolute text-light border border-[#0054FF]'
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

    <div className="h-[70vh]">
      <h2 className=' font-bold text-8xl mt-64 w-full text-center'>Skills</h2>

<div className='w-full relative flex justify-center rounded-full bg-circularLight'>

<Skill name="Flutter" x="0vw" y="-20vw"/> 
<Skill name="React.js" x="-20vw" y="2vw"/>

<Skill name="Tailwind CSS" x="-30vw" y="-10vw"/>

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
