import './cart.css'
import React from 'react'
import { img_300, unavailable } from '../config/config';

export const Cartt = ({id,title,poster,media,rating,release,vote}) => {

  return (
    <div className='main'>
        <img src={poster?`${img_300}/${poster}`:unavailable} className='main__img' alt={title}/>
        <p className='main__title'>{title}</p>
        <div className='main__subsection'>
            {vote?`${vote}`:<span className='main__subsection--span'> {media==="tv"?'Series':'Movie'}</span>}
            <span className='main__subsection--span'> ⭐{rating}</span>
            <span className='main__subsection--span'>  {release}</span>
        </div>

      

    </div>
  )
}
export default Cartt;