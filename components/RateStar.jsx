/** @format */

import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/solid';

const MAX_RATING = 5;

const RateStar = ({ rating }) => {
  const rate = Array(MAX_RATING).fill(<StarIcon className='w-5 h-5 text-gray-400' />);
  return (
    <>
      {rate
        .fill(<SolidStarIcon className='w-5 h-5 text-yellow-500' />, 0, Math.round(rating))
        .map((star, index) => (
          <div key={index} className='flex'>
            {star}
          </div>
        ))}
    </>
  );
};

export default RateStar;
