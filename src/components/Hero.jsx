import { motion } from "framer-motion";
import { styles } from "../styles";
import TypeWriterEffect from 'react-typewriter-effect';

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
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-24`}>
            Hi, I'm <span className='text-[#0054FF]'>Tushar</span>
          </h1>
         
           <span className={`${styles.heroSubText} mt-2 text-white-100 flex`}>
  I am a{' '}
  <span className="ml-2">
  <TypeWriterEffect
    startDelay={200}
    cursorColor="#3F3D56"
    multiText={[
      'MERN stack developer',
      'Flutter developer',
      'competitive programmer',
    ]}
    multiTextDelay={1000}
    typeSpeed={70}
    multiTextLoop
  />
  </span>
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
