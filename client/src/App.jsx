import React from 'react'
import Convert from './pages/Convert'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div className='bg-red-400 text-2xl'>
      <Convert />
      <Toaster/>
    </div>
  )
}

export default App
