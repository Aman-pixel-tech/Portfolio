import React, { Component } from 'react'
// import('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&display=swap')
import companyLogo8 from './image/proj.png';
import companyLogo28 from './image/Tour.png';
import companyLogo38 from './image/tic.jpg';
import companyLogo48 from './image/port.png';
import companyLogo58 from './image/view.jpg';
import ScrollAnimation from 'react-animate-on-scroll';


function Project() {

  function click(){
    alert("opening")
  }
 
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
      
         <h1>TOUR AND TRAVELLS</h1>
      
      <button className='btn3 ' onClick={click}>About More</button>
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
         <h1>TIC TAC TOE</h1>
     
      <button className='btn3 ' onClick={click}>About More</button>
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
       
      <button className='btn3 ' onClick={click}>About More</button>
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
         <h1>VIEW</h1>
      
      <button className='btn3 ' onClick={click}>About More</button>
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