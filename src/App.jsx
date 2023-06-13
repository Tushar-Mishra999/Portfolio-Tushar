import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-br from-primary to-tertiary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          {/* <div className=""> */}
         
          <Navbar />
          <Hero />
          </div>
        {/* </div> */}
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
      </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
