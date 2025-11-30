import React, { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import Slider from '../Components/Silder/Slider';
import PopularGames from '../Components/PopularGames/PopularGames';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Home = () => {

   
    useEffect(() => {
        document.title = "HomeNest";
    }, []);
    return (
    <>
    <Slider></Slider>
    <PopularGames></PopularGames>
    <NewsLetter></NewsLetter>
    
    </>
     
    );
};

export default Home;