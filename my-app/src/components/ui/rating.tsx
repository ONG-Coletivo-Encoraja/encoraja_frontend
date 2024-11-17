import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'text-yellow-500' : 'text-gray-300'}>
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;