import React from 'react'
import Footer2 from '../components/Footer2'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingPage from '../components/TrainingPage'

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRANING.' text='Pre-Flight & In-Flight Training.' />
      <TrainingPage />
      <Footer2 />
    </div>
  )
}

export default Training