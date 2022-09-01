import React from 'react'
import { useContext } from 'react'

const Kids = (kid) => {
       const {name} = useContext()
  return (  
    <>
     {name.length > 0 ? name.map((kid) => {
           
            return (
                <>
               <div className="kids">
                     <h3>{kid.fullName}</h3>
               </div>
               </>
            )
     }):<h4>no names found</h4>}
    </>
  )
}

export default Kids