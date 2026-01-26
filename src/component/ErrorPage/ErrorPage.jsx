import React from 'react';
import img from "../../assets/image.png"
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center'>
            <div  >
                <img className='' src={img} alt="" />
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ErrorPage;