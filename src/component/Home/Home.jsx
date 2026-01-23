import React from 'react';
import Slider from '../slider/Slider';
import Review from '../Review/Review';
import Offer from '../Offer/Offer';




const Home = () => {
    return (
        <div>
       <Slider></Slider>
       <Offer></Offer>
       <Review></Review>
        </div>
    );
};

export default Home;