import React from 'react'
// import companyLogo10 from './image/aman.jpg';
import companyLogo10 from './image/form.png';
// import('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2&family=Bree+Serif&display=swap')
import Card from './card';
import './card.css'


function About() {
  return (
   <div>
    <div className='container3' id='about'>

      <div className="aboutme">
      <img src={companyLogo10} alt="Paris" id="center15" />  
      </div>

      <div className='aboutme2' >
       <h1 className="head7">
       - CONTACT ME -
       </h1>
       <p className='para7'>I am the one you're looking for</p>
       
      </div>
      <div className='aboutme3'>
        <div className='aboutme4'>

        </div>
      </div>
    </div>
   
    <Card/>
   </div>
  )
}

export default About
