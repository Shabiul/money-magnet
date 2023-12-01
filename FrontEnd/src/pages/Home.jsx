import React from 'react'

import Input from './Input'



export const Home = ({savings,updateSavings}) => {
  return (
    <div>
     
      <Input savings={savings} updateSavings={updateSavings}/> 
      
     
    </div>

  )
}
