import React from 'react'
import './slidebar.css'
import PageviewIcon from '@mui/icons-material/Pageview';
import SearchIcon from '@mui/icons-material/Search';
import Otherusers from './Otherusers';

const Sidebar = () => {
  return (
    <div className='C-slide'>
       <div className='C-Searchbox'>
         <input id='Ci-button' type="text" placeholder='Search here ' />
         <button id='C-button'><SearchIcon /></button>
       </div>
         <div className="scrollable-container">
            <Otherusers/>
         </div>
    </div>
  )
}

export default Sidebar