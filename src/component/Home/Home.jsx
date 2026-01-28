import React from 'react';
import Slider from '../slider/Slider';
import Review from '../Review/Review';
import Offer from '../Offer/Offer';
import AllCard from '../allcard/AllCard';
import useTitle from '../../Hooks/useTitle';




const Home = () => {
    useTitle('Home')
    return (
        <div>
       <Slider></Slider>
       <AllCard></AllCard>
       <Offer></Offer>
       <Review></Review>
        </div>
    );
};

export default Home;