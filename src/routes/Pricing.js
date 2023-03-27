import React from 'react'
import Navbar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import PricingCardList from '../components/PricingCardList';
import Footer2 from '../components/Footer2';

const Pricing = () => {
  return (
    <div>
     <Navbar />
     <HeroImage heading='PRICING.' text='Choose Your Trip'/>
     <PricingCardList />
     <Footer2 />
    </div>
  );
}

export default Pricing