import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import coderImage from '../assets/coder2.jpg';
import TypeWriterEffect from 'react-typewriter-effect';
//import { fadeIn, textVariant } from "../utils/motion";
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
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-24`}>
            Hi, I'm <span className='text-[#915EFF]'>Tushar</span>
          </h1>
         
           <p className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
  I am a{' '}
  <span className="ml-2">
  <TypeWriterEffect
    startDelay={200}
    cursorColor="#3F3D56"
    multiText={[
      'full-stack developer',
      'competitive programmer',
    ]}
    multiTextDelay={1000}
    typeSpeed={70}
    multiTextLoop
  />
  </span>
</p>


     
    
        </div>
        <div className="w-1/3 ml-20 ">
            <img
              src={coderImage}
              alt="Your image"
              className="w-full h-full rounded-full overflow-hidden"
            />
          </div>
      </div>
      
        </motion.div>
      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
