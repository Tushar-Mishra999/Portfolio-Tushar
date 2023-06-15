import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import  {SectionWrapper}  from "../hoc";
import { slideIn } from "../utils/motion";
import linkedinImg from '../assets/contact/linkedin.png';
import githubImg from '../assets/contact/github.png';
import leetcodeImg from '../assets/contact/leetcode.png';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_dadu49p',
        'template_u11y0p8',
        {
          from_name: form.name,
          to_name: "Tushar Mishra",
          from_email: form.email,
          to_email: "tusharmishra16@gmail.com",
          message: form.message,
        },
        'FMMYVn6T7edJBuHeO'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl'
      >
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} text-center sm:text-left`}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-[#070348] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={2}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <div className="flex gap-5">

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>

        <button type='button' onClick={() => window.location.href = "https://leetcode.com/TusharMishra1612/"}>
          <img src={leetcodeImg} className='w-14 h-14 rounded-full '  />
        </button>
        
        <button type='button' onClick={() => window.location.href = "https://github.com/Tushar-Mishra999"}>
          <img src={githubImg} className='w-14 h-14 rounded-full'  />
        </button>


        <button type='button' onClick={() => window.location.href = "https://www.linkedin.com/in/tushar-mishra-37b917203/"}>
          <img src={linkedinImg} className='w-14 h-14 rounded-full '  />  
        </button>

        

          </div>

          

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
