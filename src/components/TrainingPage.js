import React from 'react';
import './TrainingPage.style.css';
import {Link} from 'react-router-dom';
import Pod from '../assets/pod.jpg';
import Moon from '../assets/moon.jpg';

const TrainingPage = () => {
  return (
   <div className='training'>
    <div className='left'>
        <h1>Training</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={Moon} className='img' alt='' />
            </div>
            <div className='image-stack bottom'>
                <img src={Pod} className='img' alt='' />
            </div>
        </div>
    </div>
   </div>
  )
}

export default TrainingPage