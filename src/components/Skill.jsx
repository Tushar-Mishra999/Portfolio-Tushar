import React from "react";
import  {SectionWrapper}  from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";


const Skill = ({name, x, y}) => {
return(
<motion.div className=' rounded-full font-semibold py-3 px-2 sm:px-6 shadow-dark cursor-pointer absolute text-light border border-[#0054FF]'
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

    <div className="h-[70vh] flex flex-col">
      <h2 className=' font-bold text-8xl mt-64 w-full text-center md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Skills</h2>
     

<div className='w-full relative flex justify-center rounded-full bg-circularLight'>

<Skill name="Flutter" x="12vw" y="30vh"/> 
<Skill name="React.js" x="-12vw" y="30vh"/>

<Skill name="Tailwind CSS" x="20vw" y="20vh"/>

<Skill name="Javascript" x="-20vw" y="20vh" />

<Skill name="ReactJS" x="30vw" y="10vh"/>

<Skill name="Next.js" x="-30vw" y="10vh"/>
<Skill name="AWS" x="30vw" y="-20vh"/>

<Skill name="C++" x="-30vw" y="-20vh"/>

<Skill name="MySQL" x="20vw" y="-30vh"/>

<Skill name="Node.js" x="-20vw" y="-30vh"/>
<Skill name="Dart" x="12vw" y="-40vh"/>
<Skill name="Firebase" x="-12vw" y="-40vh"/>
</div>
</div>
  );
};

export default SectionWrapper(Tech, "skills");
