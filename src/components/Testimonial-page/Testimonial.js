import React from 'react';
import './Testimonial.style.css';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
import {FaQuoteLeft} from 'react-icons/fa';
import User1 from '../../assets/user-1.png';
import User2 from '../../assets/user-2.png';
import User3 from '../../assets/user-3.png';

const Testimonial = () => {

  return (
    <div class="testimonial">
    <div class="testimonial-container">
        <div class="col">
         <FaQuoteLeft color='#f87260' fontSize={34} />
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Temporibus aut voluptatem tempore qui non, mollitia, 
            sapiente a reiciendis</p>
            <div class="rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
            </div>
            <img src={User1} alt='' />
            <h3>Sean Parker</h3>
        </div>
        <div class="col">
        <FaQuoteLeft  color='#f87260' fontSize={34}  />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Temporibus aut voluptatem tempore qui non, mollitia, 
            sapiente a reiciendis</p>
            <div class="rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
            </div>
            <img src={User2} alt='' />
            <h3>Mike Smith</h3>
        </div>
        <div class="col">
        <FaQuoteLeft color='#f87260' fontSize={34} />
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Temporibus aut voluptatem tempore qui non, mollitia, 
            sapiente a reiciendis</p>
            <div class="rating">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
            </div>
            <img src={User3} alt='' />
            <h3>Mobel Joe</h3>
        </div>
      </div>
    </div>
  )
}

export default Testimonial