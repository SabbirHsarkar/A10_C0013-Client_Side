import React, { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Slider from '../Components/Silder/Slider';

import NewsLetter from '../Components/NewsLetter/NewsLetter';
import PopularHome from '../Components/PopularHome/PopularHome';
import WhyChoose from '../Components/WhyChoose/WhyChoose';
import FeaturedService from '../Components/FeaturedService/FeaturedService';

const Home = () => {

   
    useEffect(() => {
        document.title = "HomeNest";
    }, []);
    return (
    <>
    <Slider></Slider>
    <PopularHome></PopularHome>
    <WhyChoose></WhyChoose>
    <FeaturedService></FeaturedService>
    <NewsLetter></NewsLetter>
    
    </>
     
    );
};

export default Home;