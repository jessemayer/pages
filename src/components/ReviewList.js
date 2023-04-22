import React from 'react'
import ReviewItem from './ReviewItem'

const ReviewList = ({reviews}) => {
  return (
    <div>
      <h5>Customer Reviews</h5>
      {reviews.map((review) => (
        <ReviewItem 
        review={review}
        key = {review.id} />
      ))}
    </div>
  )
}

export default ReviewList
