import React from 'react'
import { Pagination } from '@mui/material'

const CustomPagination = ({setPage,numOfPages=500}) => {

  const handlePageChange=(page)=>{
    setPage(page);
    window.scroll(0,0)

  }
  
  
  return (
    <div><Pagination count={numOfPages} color='primary' onChange={(e)=>handlePageChange(e.target.textContent)}/></div>
  )
}

export default CustomPagination