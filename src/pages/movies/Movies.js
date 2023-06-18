import React, { useEffect, useState } from 'react'
import '../../pages/common.css'
import axios from 'axios'
import Cartt from '../../cart/Cartt';
import CustomPagination from '../../components/pagination/CustomPagination';
const Movies = () => {

  const [page,setPage]=useState(1);
  const [data,setData]=useState([])
  // const [numOfPages,setNumOfPages]=useState()

  const fetchMovies=async()=>{
   try{
    const res=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=5d5a2f568fb2896ea238e0563d5f6c3d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    setData(res.data.results)
    console.log(res.data.total_pages)
    // setNumOfPages(res.data.total_pages)
   }catch(err){
    console.log(err,'Movies API having some issues')
   }
  }
  useEffect(()=>{
    fetchMovies()
    // eslint-disable-next-line 
  },[page])

  return (
    <div>
    <div className='Title'>
    {data && data.map((elem)=>{
      return <Cartt key={elem.id} id={elem.id} title={elem.title || elem.name} poster={elem.backdrop_path} 
      media={elem.media_type} rating={elem.vote_average} release={elem.release_date 
      || elem.first_air_date}
      />
    })}
    
    
    
    {/* {numOfPages>1 && (
      )} */}
    </div>
      {/* <CustomPagination setPage={setPage} /> */}
      <div className="pagination">
  <CustomPagination setPage={setPage}/>
  </div>
    </div>
  )
}

export default Movies