import React, { useEffect, useState } from 'react'
import '../../pages/common.css'
import axios from 'axios'
import Cartt from '../../cart/Cartt'
import CustomPagination from '../../components/pagination/CustomPagination'

const Search = () => {

  const [data,setData]=useState([])
  const [searchText,setSearchText]=useState('')
  const [page,setPage]=useState(1)
  

  const fetchSearch=async()=>{
    try{
      const res=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=5d5a2f568fb2896ea238e0563d5f6c3d&include_adult=false&language=en-US&page=${page}`)
    setData(res.data.results)
    
    
    
    }catch(err){
      console.log(err,'search having some issue')
    }
  }
  

  useEffect(()=>{
    fetchSearch()
    
    // eslint-disable-next-line
  },[searchText,page])

  return (
    <div>
      <div className='search'><input type='text' placeholder='Search here' name='searchText' value={searchText} onChange={e=>setSearchText(e.target.value)}/>
      {/* <button type='submit' onClick={fetchSearch}>Search Here</button> */}
      </div>
    <div className='Title'>
      
      {
        data && data.map((elem)=>{
          return <Cartt  key={elem.id} id={elem.id} title={elem.title || elem.name} poster={elem.backdrop_path} 
          vote={elem.vote_count} rating={elem.vote_average} release={elem.release_date 
          || elem.first_air_date}
          
          />
        })
      }
    </div>
    <div className="pagination">
  <CustomPagination setPage={setPage}/>
  </div>

    </div>
  )
}

export default Search