import React from 'react';
import PhoneCategories from '../../PhoneCategories/PhoneCategories/PhoneCategories';
import About from '../About/About';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AboutMe></AboutMe>
            <PhoneCategories></PhoneCategories>
            
        </div>
    );
};

export default Home;