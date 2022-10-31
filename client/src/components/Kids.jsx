import React from 'react'
import { useContext } from 'react'

const Kids = ({names}) => {
       const {name} = useContext()
  return (  
    <>
     {name.length > 0 ? name.map((names) => {
           
            return (
                <>
               <div>
                     <h3>{names.text}</h3>
               </div>
               </>
            )
     }):<h4>no names found</h4>}
     <div>
     </div>
    </>
  )
} 

export default Kids