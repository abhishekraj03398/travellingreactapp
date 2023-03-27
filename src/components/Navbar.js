import React, {useState} from 'react';
import './Navbar.style.css';
import {Link, NavLink} from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const[click,setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }

    const [color, setColor] = useState(false);
      const changeColor = () => {
        if(window.scrollY >= 100) {
          setColor(true)
        }else {
          setColor(false)
        }
      }

      window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
       <Link to='/'> <h1>GLX TRVL</h1></Link>

        <ul className={click ? 'menu-list active': 'menu-list'}>
            <li>
            <NavLink  to="/">Home</NavLink>
            </li>
            <li>
            <NavLink 
                  style={({isActive}) => {return {color: isActive  ? 'orange' : 'white'}}}
                to="/pricing">Pricing
            </NavLink>
            </li>
            <li>
            <NavLink 
                  style={({isActive}) => {return {color: isActive  ? 'orange' : 'white'}}}
                to="/training">Training
            </NavLink>
           </li>
            <li>
            <NavLink 
                  style={({isActive}) => {return {color: isActive  ? 'orange' : 'white'}}}
                to="/contact">Contact
            </NavLink>
            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
        {click ? (<AiOutlineClose  
            color='#fff'
            title='close-menu'
            fontSize={20}/>) : ( <AiOutlineMenu 
            color='#fff'
            title='menu'
            fontSize={20}
            />)}
      </div>
       
    </div>
   
  );
}

export default Navbar