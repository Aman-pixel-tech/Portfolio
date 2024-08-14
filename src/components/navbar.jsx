import React from 'react'
import { Link } from 'react-scroll'
import Body from './body'
import './body.css'

const Navbar = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
 
  
  return (
    <div className='container'>
      <nav>
        <h1 className='header'>AMAN BARI</h1>
        <ul>

          <Link
            className='link1'
            id='set1'
            activeClass="active"
            to="container"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Home
          </Link>
         
          
          <Link
            className='link1'
            id='set2'
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Skill
          </Link>
          <Link
            className='link1'
            id='set4'
            activeClass="active"
            to="container1"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Project
          </Link>
          <Link
            className='link1'
            id='set2'
            activeClass="active"
            to="container3"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            Contact Me
          </Link>


         

        </ul>
      </nav>
      <Body />

    </div>
  )
}

export default Navbar