import React, { Component } from 'react'
// import('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&display=swap')
import companyLogo8 from './image/proj.png';
import companyLogo28 from './image/p1.png';
import companyLogo38 from './image/p2.png';
import companyLogo48 from './image/port.png';
import companyLogo58 from './image/p4.png';
import ScrollAnimation from 'react-animate-on-scroll';


function Project() {

  
 
  return (
    <div className='container1' >
      <div className='proj'>
      <ScrollAnimation animateIn='fadeIn'animateOut='fadeIn'>
        <div className='head3'>
          <h1 id='head2'>PROJECT'S  &<br></br><span id='inhead'>IDEAS</span></h1>
        </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn='fadeIn'animateOut='fadeIn' >
        <div className='innerimage'>
          <img src={companyLogo8} alt="Paris" id="center9" />
        </div>
        </ScrollAnimation>
      </div>



      <div className='box'>
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeIn' >
 <div className='card31'>
      <div className="flip-card1">
  <div className="flip-card-inner1">
    <div className="flip-card-front1">
     
      <img src={companyLogo28} alt="Avatar"className="center09" />
    </div>
    <div className="flip-card-back1">
      
         <h1>YOGA WITH DIET</h1>
      
      <button className='btn3 ' ><a href='https://aman-pixel-tech.github.io/yogawithdiet/'>About more</a></button>
    </div>
  </div>
</div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeIn'>
 <div className='card31'>
      <div className="flip-card1">
  <div className="flip-card-inner1">
    <div className="flip-card-front1">
     
      <img src={companyLogo38} alt="Avatar"className="center09" />
    </div>
    <div className="flip-card-back1">
         <h1>Memory-Hurdle</h1>
     
         <button className='btn3 ' ><a href='https://aman-pixel-tech.github.io/MemoryHurdles/'>About more</a></button>
         </div>
  </div>
</div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeIn'>
 <div className='card31'>
      <div className="flip-card1">
  <div className="flip-card-inner1">
    <div className="flip-card-front1">
     
      <img src={companyLogo48} alt="Avatar"className="center09" />
    </div>
    <div className="flip-card-back1">
         <h1>PORTFOLIO</h1>
       
         <button className='btn3 ' ><a href='https://aman-pixel-tech.github.io/Portfolio/'>About more</a></button>

    </div>
  </div>
</div>
      </div>
      </ScrollAnimation>
      <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeIn'>
 <div className='card31'>
      <div className="flip-card1">
  <div className="flip-card-inner1">
    <div className="flip-card-front1">
     
      <img src={companyLogo58} alt="Avatar"className="center09" />
    </div>
    <div className="flip-card-back1">
         <h1>Sorting-Visualizer</h1>
      
         <button className='btn3 ' ><a href='https://aman-pixel-tech.github.io/sorting-visualizer/'>About more</a></button>

    </div>
  </div>
</div>
      </div>
      </ScrollAnimation>
      </div>
    </div>

  )

}


export default Project