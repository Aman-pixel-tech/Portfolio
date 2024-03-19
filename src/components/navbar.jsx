import React from 'react'
import { Link } from 'react-scroll'
import Body from './body'
import './body.css'
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  const { loginWithRedirect,isAuthenticated, logout,user} = useAuth0();
  
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
            id='set2'
            activeClass="active"
            to="container3"
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            onSetActive={handleSetActive}
          >
            About
          </Link>


          {/* <NavLink className={(e) => { return e.isActive ? "red" : "" }} id='set3' to="/login"><li>Login</li></NavLink> */}

        </ul>
        

     <div>
     {
          isAuthenticated && <span id='autho'>{ user.name}</span>
        }

        {
          isAuthenticated ? (
            <button className='daynight1'onClick={() => logout({ logoutParams: { returnTo:"https://aman-pixel-tech.github.io/Portfolio/" } })}>
      Log Out
    </button>)
    :(
    <button className='daynight1' onClick={() => loginWithRedirect()}>Log In</button>

          )
        }
    </div>
      </nav>
      <Body />

    </div>
  )
}

export default Navbar