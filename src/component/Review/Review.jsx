import React, { useState } from 'react';
import { Star, User, Calendar } from 'lucide-react'; // Optional icons

const Review = () => {
  const [reviews] = useState([
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "Oct 12, 2025",
      comment: "My toddler loves the wooden train set! Very durable and the colors are so bright.",
      toyName: "Classic Wooden Train"
    },
    {
      id: 2,
      author: "James T.",
      rating: 4,
      date: "Nov 05, 2025",
      comment: "Great puzzle, though some pieces were a bit tight for a 3-year-old at first.",
      toyName: "Animal Kingdom Puzzle"
    }
  ]);

  // Simple Star Renderer
  const RenderStars = ({ rating }) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill={i < rating ? "currentColor" : "none"} />
        ))}
      </div>
    );
  };

  return (
    
    <div className='bg-orange-50'>
        <div className="max-w-4xl mx-auto p-6  rounded-3xl shadow-sm font-sans">
      <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">What Parents Are Saying 🧸</h2>

      {/* Review List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-2xl shadow-sm border-b-4 border-orange-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-lg text-gray-800">{review.author}</h4>
                <p className="text-sm text-orange-500 font-medium italic">Verified Purchase: {review.toyName}</p>
              </div>
              <RenderStars rating={review.rating} />
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-4">"{review.comment}"</p>
            
            <div className="flex items-center text-gray-400 text-xs gap-4">
              <span className="flex items-center gap-1"><Calendar size={12}/> {review.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats / Action */}
      <div className="mt-12 p-8 bg-white rounded-3xl border-2 border-dashed border-orange-300 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Happy with your purchase?</h3>
        <p className="text-gray-500 mb-6">Share your joy with other parents!</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-transform hover:scale-105">
          Write a Review
        </button>
      </div>
    </div>
    </div>
  );
};

export default Review;