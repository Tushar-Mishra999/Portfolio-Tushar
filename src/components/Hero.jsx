import { motion } from "framer-motion";
import { styles } from "../styles";
// import TypeWriterEffect from 'react-typewriter-effect';

const textVariant =()=> {
  return {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}
};
const texts = ['Text 1', 'Text 2', 'Text 3'];

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto `}>
      <motion.div variants={textVariant()} initial="hidden" animate="visible">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto mt-20 ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0054FF]' />
          <div className='w-1 h-80 violet-gradient' />
        </div>
        <div className='text-left'>
          <h1 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px] mt-24`}>
            Hi, I'm <span className='text-[#0054FF]'>Tushar</span>
          </h1>
         
           <span className={`text-opacity-30 font-black md:text-[30px] sm:text-[50px] xs:text-[40px] text-[15px] mt-2 text-[#a4a4a4] flex `}>
           Crafting digital experiences driven by futuristic innovation.
</span>     
    
        </div>
        {/* <div className="w-1/3 ml-20 ">
            <img
              src={coderImage}
              alt="Your image"
              className="w-full h-full rounded-full overflow-hidden"
            />
          </div> */}
      </div>
      
        </motion.div>
    </section>
  );
};

export default Hero;
