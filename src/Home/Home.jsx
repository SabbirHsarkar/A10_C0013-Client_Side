import React, { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Slider from '../Components/Silder/Slider';

import NewsLetter from '../Components/NewsLetter/NewsLetter';
import PopularHome from '../Components/PopularHome/PopularHome';

const Home = () => {

   
    useEffect(() => {
        document.title = "HomeNest";
    }, []);
    return (
    <>
    <Slider></Slider>
    <PopularHome></PopularHome>
    <NewsLetter></NewsLetter>
    
    </>
     
    );
};

export default Home;