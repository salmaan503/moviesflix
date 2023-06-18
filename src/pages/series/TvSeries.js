import React, { useState,useEffect } from 'react'
import '../../pages/common.css'
import axios from 'axios'
import Cartt from '../../cart/Cartt'
import CustomPagination from '../../components/pagination/CustomPagination'
const TvSeries = () => {
  const [data,setData]=useState([])
  const [page,setPage]=useState(1)

  const fetchTvSeries=async()=>{
    try{
      const res=await axios.get( `https://api.themoviedb.org/3/discover/tv?api_key=5d5a2f568fb2896ea238e0563d5f6c3d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    setData(res.data.results)

    }catch(e){
      console.log(e,'tv series having some issue')
    }
  
  }
  useEffect(()=>{
    fetchTvSeries()
    // eslint-disable-next-line
  },[page])
  return (
   <div>
    <div>
      
      TV Series
      </div>
     <div className='Title'>
     {data && data.map((elem)=>{
        return <Cartt key={elem.id} id={elem.id} title={elem.title || elem.name} poster={elem.backdrop_path} 
        vote={elem.vote_count} rating={elem.vote_average} release={elem.release_date 
        || elem.first_air_date}
        />
      })}
     </div>
    
    <div className="pagination">
  <CustomPagination setPage={setPage}/>
  </div>
   </div>
  )
}

export default TvSeries