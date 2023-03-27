import React from 'react';
import './Footer2.style.css';
import {Link, NavLink} from 'react-router-dom';
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa';
import AppStore from '../assets/app-store.png';
import PlayStore from '../assets/play-store.png';
 
const Footer2 = () => {
  return (
    <div className='footer1'>
        <div className='footer1-container'>
        <div className="footer-col-1">
            <Link to='/'> <h3>GLX TRVL</h3></Link>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="footer-col">
             <h3>Useful Links</h3>
             <div className='footer-link'>
             <ul>
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
             </div>
            </div>
            <div className='footer-col-3'>
            <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src={PlayStore} alt='' />
                <img src={AppStore} alt='' />
              </div>
            </div>
           
            <div class="footer-col">
             <h3>Follow Us</h3>
            <div className='footer-social'>
               <div className='facebook'>
               <h4><FaFacebook size={30} color='#fff' style={{marginRight:'1.3rem'}} />Facebook</h4>
                </div> 
                <div className='twitter'>
                    <h4> <FaTwitter size={30} color='#fff' style={{marginRight:'1.3rem'}}  />Twitter</h4>
                </div>
                <div className='linkdin'>
                    <h4><FaLinkedin size={30} color='#fff' style={{marginRight:'1.3rem'}} />Linkdin</h4>
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer2