import React from 'react';
import img from "../../assets/image.png"
import Navbar from '../Navbar/Navbar';


const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex justify-center items-center'>
            <div  >
                <img className='' src={img} alt="" />
            </div>
        </div>
        </div>
    );
};

export default ErrorPage;