import React from 'react'
import { v4 as uuid } from 'uuid';
import StarRating from './StarsRating';

const ReviewForm = ({form, reviews, setForm, setReviews}) => {
    
    

    const handleChange = e => {
        const {name, value } = e.target
        setForm({...form, [name]: value})
    }

    const handleSubmit = e => {
      e.preventDefault();
      setReviews([...reviews, form]);
      setForm({review: '', id: uuid()})
    }


  return (
    <form className='mb-3 form-floating container' onSubmit={handleSubmit}>
      <br></br>
        
        <StarRating />
        <input 
            type='text'
            id='form-input'
            className='form-control'
            autoComplete='off'
            name='review'
            value={form.review}
            onChange={handleChange}
            />
            <br></br>
            <button type='submit' className='submit btn btn-success  col-3 '>Submit</button>
    </form>
  )
}

export default ReviewForm
