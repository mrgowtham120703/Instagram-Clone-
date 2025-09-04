import React from 'react'
import Sidebar from './Sidebar.jsx'

const App = () => {
  return (
   <div>
    <div className='d-flex vh-100'>
        <div className='w-20'><Sidebar/></div>
        <div className='w-50 bg-secondary'>feed</div>
        <div className='w-30'>suggestions</div>
    </div>
   </div> 
    
  )
}

export default App