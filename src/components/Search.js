import React from 'react'

function Search ({ handleInput, search }) {
  return (
   
      <section className='searchBox-wrap' >
        <input 
        type='text' 
        placeholder= "Search for a great Movie..." 
        className='searchBox'
        onChange={handleInput}
        onKeyDown={search}
        />
      </section>
    
  )
  
}

export default Search
