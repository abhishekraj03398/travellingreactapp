import React from "react";
import About from "../components/About-page/About";
import Footer2 from "../components/Footer2";
import Navbar from '../components/Navbar';
import Testimonial from "../components/Testimonial-page/Testimonial";
import Video from "../components/Video";


const Home = () => {

    return(
        <div>
         <Navbar />
        <Video />
        <About />
        <Testimonial />
        <Footer2 />
        </div>
    );
}


export default Home