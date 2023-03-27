import React from 'react'
import FormPage from '../components/FormPage'
import NavBar from '../components/Navbar';
import HeroImage from '../components/HeroImage';
import Footer2 from '../components/Footer2';

const Contact = () => {
  return (
    <div>
       <NavBar />
       <HeroImage heading='CONTACT.' text='Contact GLX Travel' />
       <FormPage />
       <Footer2 />
        </div>
  )
}

export default Contact