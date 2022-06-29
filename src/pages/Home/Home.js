import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Project from './Project';
import Service from './Service';
import Review from './Review';
import Contact from './Contact';
import Footer from './Footer';

const Home = () => {
      
      return (
            <div>
                  <Banner/>
                  <Project/>
                  <Service/>
                  <Review/>
                  <Contact/>
                  <Footer/>
            </div>
      );
};

export default Home;