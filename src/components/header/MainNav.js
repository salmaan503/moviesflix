import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom';




export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=useNavigate()
  React.useEffect(()=>{
    if(value===0) navigate('/')
    else if(value===1) navigate('/movies')
    else if(value===2) navigate('/tvseries')
    else if(value===3) navigate('/search')
  },[value,navigate])
console.log(value)

  return (
    <Box sx={{ width: '100%',position:'fixed',bottom:'0px'}}>
      <BottomNavigation
        sx={{backgroundColor:'#27374D'}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" sx={{color:'#DDE6ED'}} icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies"sx={{color:'#DDE6ED'}} icon={<MovieCreationIcon />} />
        <BottomNavigationAction label="TvSeries" sx={{color:'#DDE6ED'}}icon={<TvIcon />} />
        <BottomNavigationAction label="Search" sx={{color:'#DDE6ED'}}icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}