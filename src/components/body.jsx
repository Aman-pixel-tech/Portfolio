import React from 'react'
import { motion } from "framer-motion";
import Project from './project';
import './project.css'
import About from './About';
import './About.css'


import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&display=swap')

import companyLogo from './image/1.png';
import companyLogo1 from './image/html.png';
import companyLogo2 from './image/css.png';
import companyLogo3 from './image/js.png';
import companyLogo4 from './image/n.png';
import companyLogo5 from './image/react.png';
import companyLogo6 from './image/image11.png';
import companyLogo7 from './image/mogo.png';
import companyLogo8 from './image/c.png';
import companyLogo9 from './image/java.png';
import companyLogo10 from './image/py.png';


function Body() {
  const [typeEffect] = useTypewriter({
    words: ['Web Dev', 'Frontend Dev', 'UI/UX Dev', 'React Dev'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  } )
 
    const text = "I am architect of my life".split(" ");
    const text1 = "I build its foundation and choose its contents...".split(" ");
  

  return (
    <div>
      <div className='section'>
        <div className='title'>
          <p className='inner'>Hello!  </p>
          <br></br>
          <br></br>
          <span className='inner'>I'am </span>
          <span className='inner' id='element'>{typeEffect}</span>
          <p className='inner2'>{text.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: 1,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}<br></br>
           {text1.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 5,
            delay: 1,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>))}
        </p>
            <button className='btn4 '>Hire Me</button>

        </div>
        <img src={companyLogo} alt="Paris" className="center" />
      </div>
<hr></hr>
      <div className='skill'>
        <div className='skillimg'>
        <img src={companyLogo6} alt="Paris" id="center7" />
        </div>
        <div className='skillheading'>
          <h1 id='head'>
            -MY SKILLS-
          </h1>
          <p id='para'>What you do and why you do it. You can do it when you skill it...</p>
        </div>
      </div>
      <div className='innerskills1'>
        <div className='cardimg'>
          <img src={companyLogo1} alt="Paris" id="center1" />

        </div>
        <div className='cardimg'>

          <img src={companyLogo2} alt="Paris" id="center2" />
        </div>
        <div className='cardimg'>
          <img src={companyLogo3} alt="Paris" id="center3" />

        </div>
        <div className='cardimg'>
          <img src={companyLogo4} alt="Paris" id="center4" />

        </div>
        <div className='cardimg'>
          <img src={companyLogo5} alt="Paris" id="center5" />

        </div>
        <div className='cardimg'>
          <img src={companyLogo7} alt="Paris" id="center4" />

        </div>
        <div className='cardimg'>

          <img src={companyLogo8} alt="Paris" id="center6" />
        </div>
        <div className='cardimg'>
          <img src={companyLogo9} alt="Paris" id="center4" />

        </div>
        <div className='cardimg'>
          <img src={companyLogo10} alt="Paris" id="center8" />

        </div>
       

      </div>
      <Project/>
      <About/>
     
    </div>


  )

}

export default Body
