import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Heading from './Components/Heading';
import Model from './Components/Model';
import Event from './Components/Event';
import Movies from './Components/Movies';
import Questions from './Components/Questions';
import Footer from '../../Components/Footer/Footer';

import '../../Pages/Home/HomeStyles.css';

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About heading="About us"/>
       <Heading/>
       <Model/>
       <Event/>
       <Movies/>
       <Questions/>
       <Footer/>
    </div>
  )
}

export default Home