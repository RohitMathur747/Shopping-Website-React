import React,{ createContext } from 'react';
import { useState } from 'react';
 

export let ContexData=  createContext()
function ContextApi({children}) {
  const[data,setData]=useState({isloggin:true,userName:'Rohit',data:[]})

  return (
     <ContexData.Provider  value={{data,setData}}>
          {children}  
     </ContexData.Provider>
  )
}

export default ContextApi
