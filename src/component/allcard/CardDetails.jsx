import React from 'react';
import { useLoaderData } from 'react-router';
import { ToastContainer } from 'react-toastify';

const CardDetails = () => {
    const toy = useLoaderData()

    const handleSubmit =()=>{
        <ToastContainer />
    }
    

   
    return (
          <div className="bg-orange-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">

        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-80 object-contain"
        />

        <h1 className="text-3xl font-bold text-blue-800 mt-6">
          {toy.toyName}
        </h1>

        <p className="mt-2 text-gray-600">
          {toy.description}
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6 font-semibold">
          <p>💲 Price: {toy.price}$</p>
          <p>⭐ Rating: {toy.rating}</p>
          <p>📦 Available Quantity: {toy.availableQuantity}</p>
          <p>🧩 Sub Category: {toy.subCategory}</p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-bold">Seller Info</h2>
          <p>👤 {toy.sellerName}</p>
          <p>📧 {toy.sellerEmail}</p>
        </div>

        <div className='flex justify-around mt-6 border-t pt-4'>
            <h1>Try Now</h1>
            <form className='' onSubmit={handleSubmit}>
<input className='border border-2 p-1 rounded-2xl' type="text" name="name" id="" placeholder='Your name' />
<br />
<br />
<input className='border border-2 p-1 rounded-2xl' type="email" name="email" id="" placeholder='Your email' />
<br />
<br />
<button className='bg-green-400 border border-1 p-1 rounded-xl' type="submit">Submit</button>
            </form>
            
        </div>

      </div>
    </div>
    );
};

export default CardDetails;