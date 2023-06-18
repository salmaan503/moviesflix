import React, { useEffect, useState } from "react";
import axios from 'axios'

import "../../pages/common.css";
import Cartt from "../../cart/Cartt";

import CustomPagination from "../../components/pagination/CustomPagination";


const Trending = () => {
   const [data,setData]=useState([])
   const [page,setPage]=useState(1)


console.log(data)


    const fetchData=async()=>{
      try{
      const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=5d5a2f568fb2896ea238e0563d5f6c3d&page=${page}`) 
      // const result= await res.json() 
      console.log(res.data)      
      setData(res.data.results)
      }catch(err){
        console.log(err,'something went wrong')
      }
    }

   
  
    
    useEffect(()=>{
      fetchData()
        
    },[page])
    // filtered Data
    // const filtered=data.filter((fillt)=>fillt.title.toLowerCase().includes(search))

      
  

  return (<div>
  <div className="Title">
    {/* <input type='text' name="search" value={search} onChange={e=>setSearch(e.target.value)}/> */}
    {/* {filtered && filtered.map((elem,id)=>{
      return <div key={elem.id}>
        <p>{elem.title}</p>
        <p>{elem.original_title}</p>
        <p>{elem.overview}</p>
        <p>{elem.popularity}</p>
        <p>{elem.vote_count}</p>
        <p>{elem.vote_average}</p>
        <imp src={elem.poster_path} alt={elem.title}/>
        <p>{elem.release_date}</p><br></br>
      </div>
    })} */}

{/* {filtered && filtered.map((elem,id)=>{
      return <Cartt id={elem.id} title={elem.title || elem.original_title} poster={elem.poster_path} 
      popularity={elem.popularity} rating={elem.vote_average} release={elem.release_date}
      />
    })} */}

{data && data.map((elem,id)=>{
      return <Cartt key={elem.id} id={elem.id} title={elem.title || elem.name} poster={elem.backdrop_path} 
      media={elem.media_type} rating={elem.vote_average} release={elem.release_date 
      || elem.first_air_date}
      />
    })}
  

  </div>;
  <div className="pagination">
  <CustomPagination setPage={setPage}/>
  </div>

  </div>)
};

export default Trending;
