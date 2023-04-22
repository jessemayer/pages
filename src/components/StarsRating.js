// •	Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)

import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    

  return <div>
    {[...Array(5)].map((star, i) => {
        const ratingValue = i++;

      return (
      <label key={i}>
        <input 
        type='radio' 
        name= "rating" 
        value={ratingValue} 
        onClick={() => setRating(ratingValue)} 
        />

        <FaStar 
        className="star" 
        color={ratingValue <= (hover || rating) ? 'Gold' :  '#e4e5e9'} 
        size={20}
        onMouseEnter = {() => setHover(ratingValue)}
        onMouseLeave= {() => setHover(null)}
        />
        
      </label>
      );
    })}
          <p>Please rate and review this movie</p>
         </div>
}

export default StarRating
