import React from 'react'
import companyLogo22 from './image/pro.png';
import companyLogo from './image/ar.png';
import companyLogo23 from './image/bari.png';
import companyLogo24 from './PDF/cv.pdf';
// import('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&display=swap')
function card() {
 function comeon(){
alert("Hiring Successfull")
 }

  return (
    <div className='card1' >
      <div className='card2'>
      <img src={companyLogo} alt="Paris" className="center17" />
      </div>

      <div className='card3'>
      <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
     
      <img src={companyLogo23} alt="Avatar"className="center19" />
    </div>
    <div className="flip-card-back">
      
        <img src={companyLogo22} alt="Avatar"className="center18" />
         <h1>AMAN BARI</h1>
      <p>Software Engineer</p>
      <p>Fresher</p> 
      <button type='download' className='btn3'><a href={companyLogo24}>Download CV</a></button>
      <button className='btn3 ' onClick={comeon}>Hire Me</button>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default card
